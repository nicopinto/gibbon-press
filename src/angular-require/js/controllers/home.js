/**
* @module components (controllers/my-ctrl-1.js)
* --
* @description In the case with the app.controllers module it’ll be controllers.
* Note that we used reference to ./module.js to attach component to its module.
*/

define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('Home', function ($scope, PostService) {

    console.log('Home controller');
    
    PostService.get(function (err, data) {
      console.log('get PostService', data);
    });

  });
});