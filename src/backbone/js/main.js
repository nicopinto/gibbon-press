/**
* @name home.js
* @description Base script of require to set the libraries paths of the app (or page)
* to use as dependences and exported them as modules
*/
require.config({
  //TODO: HARDCODEADO SUPER
  baseUrl: '/wp-content/themes/theme-name/js/', //directory.path,
  paths: {
    'jquery': 'libs/jquery/jquery.min',
    'underscore': 'libs/underscore/underscore-min',
    'backbone': 'libs/backbone/backbone-min',
    'jquery.imagesLoaded': 'libs/jquery-plugins/jquery.imagesloaded.min',
    'jquery.gridalicious': 'libs/jquery-plugins/jquery.grid-a-licious.min',
    'jquery.transit': 'libs/jquery-plugins/jquery.transit.min'
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
