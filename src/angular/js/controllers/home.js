/**
* @module components (controllers/home.js)
* --
* @description In the case with the app.controllers module it’ll be controllers.
* Note that we used reference to ./module.js to attach component to its module.
*/

// var controllers = angular.module('app.controllers', []);

// angular.module('app')
app
  .controller('HomeController', function ($scope, $routeParams, PostService) {

    console.log('HomeController');

    PostService.get(function(err, data) {
      console.log('PostService.get', data);
    }, {});

  });