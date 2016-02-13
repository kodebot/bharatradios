/* */ 
'use strict';
var linotype = require('../../../index');
window.onload = function() {
  window.Linotype = new linotype({
    verticalCentered: true,
    slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
    afterRender: function() {
      document.querySelector('video').style.height = window.innerHeight + 'px';
      document.querySelector('video').play();
    }
  });
  window.Linotype.init();
};
