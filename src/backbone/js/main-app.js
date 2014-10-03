/**
* @module HomeApp
* @description This module is the main for the application
* (think about it as a document.ready for jQuery)
*/
define([
  'views/main'
], function ( MainPageView ) {
	
  var initialize = function () {
    new MainPageView();
  };

  //a module should always return an object (anonymous or as a "class")
  return {
    initialize: initialize
  };

});