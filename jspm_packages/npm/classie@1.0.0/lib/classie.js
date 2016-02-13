/* */ 
"format cjs";
'use strict';
var classList = require('./class_list_ployfill'),
    classie;
function classReg(className) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
function noop() {}
function isArr(classes) {
  if (Array.isArray(classes)) {
    return true;
  } else if (Object.prototype.toString.call(classes) === '[object Array]') {
    return true;
  } else {
    return false;
  }
}
function removeMultiple() {
  var c = arguments[1],
      elem = arguments[0];
  c.forEach(function(value) {
    if (classie.has(elem, value)) {
      noop();
    }
    classie.removeClass(elem, value);
  });
}
function addMultiple() {
  var c = arguments[1],
      elem = arguments[0];
  c.forEach(function(value) {
    if (classie.has(elem, value)) {
      noop();
    }
    classie.addClass(elem, value);
  });
}
function hasClass(elem, c) {
  return elem.classList.contains(c);
}
function addClass(elem, c) {
  if (isArr(c)) {
    addMultiple.apply(this, arguments);
  } else {
    elem.classList.add(c);
  }
}
function removeClass(elem, c) {
  if (isArr(c)) {
    removeMultiple.apply(this, arguments);
  } else {
    elem.classList.remove(c);
  }
}
function toggleClass(elem, c) {
  var fn = hasClass(elem, c) ? removeClass : addClass;
  fn(elem, c);
}
var classie = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};
if (typeof module === "object" && module && typeof module.exports === "object") {
  module.exports = classie;
} else {
  define(classie);
}
