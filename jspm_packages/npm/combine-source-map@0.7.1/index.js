/* */ 
'use strict';
var path = require('path');
var convert = require('convert-source-map');
var memoize = require('lodash.memoize');
var createGenerator = require('inline-source-map');
var pathIsAbsolute = require('./lib/path-is-absolute');
var mappingsFromMap = require('./lib/mappings-from-map');
var protocolRx = /^[a-z]+:\/\//;
var rebaseRelativePath = memoize(function(sourceFile, relativeRoot, relativePath) {
  if (!relativePath) {
    return relativePath;
  }
  var relativeRootedPath = relativeRoot ? path.join(relativeRoot, relativePath) : relativePath;
  if (sourceFile === relativeRootedPath || pathIsAbsolute(relativeRootedPath) || protocolRx.test(relativeRootedPath)) {
    return relativeRootedPath;
  }
  return path.join(path.dirname(sourceFile), relativeRootedPath);
}, function(a, b, c) {
  return a + '::' + b + '::' + c;
});
function resolveMap(source) {
  var gen = convert.fromSource(source);
  return gen ? gen.toObject() : null;
}
function hasInlinedSource(existingMap) {
  return existingMap.sourcesContent && !!existingMap.sourcesContent[0];
}
function Combiner(file, sourceRoot) {
  this.generator = createGenerator({
    file: file || 'generated.js',
    sourceRoot: sourceRoot
  });
}
Combiner.prototype._addGeneratedMap = function(sourceFile, source, offset) {
  this.generator.addGeneratedMappings(sourceFile, source, offset);
  this.generator.addSourceContent(sourceFile, source);
  return this;
};
Combiner.prototype._addExistingMap = function(sourceFile, source, existingMap, offset) {
  var mappings = mappingsFromMap(existingMap);
  for (var i = 0,
      len = existingMap.sources.length; i < len; i++) {
    if (!existingMap.sourcesContent)
      continue;
    this.generator.addSourceContent(rebaseRelativePath(sourceFile, existingMap.sourceRoot, existingMap.sources[i]), existingMap.sourcesContent[i]);
  }
  mappings.forEach(function(mapping) {
    this.generator.addMappings(rebaseRelativePath(sourceFile, null, mapping.source), [mapping], offset);
  }, this);
  return this;
};
Combiner.prototype.addFile = function(opts, offset) {
  offset = offset || {};
  if (!offset.hasOwnProperty('line'))
    offset.line = 0;
  if (!offset.hasOwnProperty('column'))
    offset.column = 0;
  var existingMap = resolveMap(opts.source);
  return existingMap && hasInlinedSource(existingMap) ? this._addExistingMap(opts.sourceFile, opts.source, existingMap, offset) : this._addGeneratedMap(opts.sourceFile, opts.source, offset);
};
Combiner.prototype.base64 = function() {
  return this.generator.base64Encode();
};
Combiner.prototype.comment = function() {
  return this.generator.inlineMappingUrl();
};
exports.create = function(file, sourceRoot) {
  return new Combiner(file, sourceRoot);
};
exports.removeComments = function(src) {
  if (!src.replace)
    return src;
  return src.replace(convert.commentRegex, '').replace(convert.mapFileCommentRegex, '');
};
