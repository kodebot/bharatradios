/* */ 
'use strict';
var Slimscroll = require('../../../lib/slimscroll');
function slimscrollEventHandler(e, pos) {
  document.querySelector('#testDivOut').innerHTML += "Reached " + pos + ", ";
}
function slimscrollingEventHandler(e, pos) {
  document.querySelector('#testDivOut2').innerHTML += "Scroll: " + pos + "px, ";
}
window.onload = function() {
  window.sscroll3 = new Slimscroll({
    alwaysVisible: true,
    height: '100px',
    idSelector: '.groupofdivs'
  });
  window.sscroll3.init();
};
