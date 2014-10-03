/**
* @name home.js
* @description Base script of require to set the libraries paths of the app (or page)
* to use as dependences and exported them as modules
*/
require.config({
  paths: {
    'jquery': 'libs/jquery/jquery-1.11.1.min',
    'underscore': 'libs/underscore/underscore-1.6.0.min',
    'backbone': 'libs/backbone/backbone-1.1.2.min',
    'jquery.imagesLoaded': 'libs/jquery-plugins/jquery.imagesloaded.min',
    'jquery.gridalicious': 'libs/jquery-plugins/jquery.grid-a-licious.min',
    'jquery.transit': 'libs/jquery-plugins/jquery.transit.min',
    'jquery.blockUI': 'libs/jquery-plugins/jquery.blockUI.min'
  },
  //this is to avoid the cache or require (add a random param to the url)
  urlArgs: "bust=" + new Date().getTime(),
  waitSeconds: 0,
  //the shim is to encapsulate the library as a module
  shim: {
    'jquery.imagesLoaded':{
      deps: ['jquery'],
      exports: 'jQuery.imagesLoaded'
    },
    'jquery.gridalicious': {
      deps: ['jquery', 'jquery.imagesLoaded'],
      exports: 'jQuery.gridalicious'
    },
    'jquery.transit': {
      deps: ['jquery'],
      exports: 'jQuery.transit'
    },
    'jquery.blockUI': {
      deps: ['jquery'],
      exports: 'jQuery.blockUI'
    }
  }
});

//First call to the main module of the application (or page)
require([
  'main-app'
], function(App){

  //Initialize the main module for the application
  App.initialize();

});
