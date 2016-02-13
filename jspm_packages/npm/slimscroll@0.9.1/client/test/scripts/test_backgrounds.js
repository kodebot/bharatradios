/* */ 
'use strict';
var linotype = require('../../../index');
window.onload = function() {
  window.Linotype = new linotype({verticalCentered: false});
  window.Linotype.init();
};
