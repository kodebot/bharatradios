/* */ 
'use strict';
var should = require('chai').should(),
    expect = require('chai').expect,
    Linotype = require('../lib/domhelper'),
    Browser = require('zombie'),
    path = require('path');
describe('DOM Manipulation', function() {
  describe('Initializing Page Settings', function() {
    var linotypeTest;
    before(function() {
      this.browser = new Browser();
      this.browser.on("error", function(error) {
        console.error(error);
      });
    });
    before(function(done) {
      this.browser.visit("file://" + path.resolve(__dirname, "../example/ssmaster/examples/index.html"), done);
    });
    it('should set the css of the linotype element', function() {});
    it('should add navigation options to the page', function() {});
    it('should have at least one section active', function() {});
    it('should wrap each section with a table container if vertically centered', function() {});
    it('should wrap each slide with a table container if vertically centered', function() {});
    it('should activate anchor link of active slide', function() {});
  });
});
