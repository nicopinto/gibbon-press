'use strict';

var app = angular.module('app', ['ngRoute']);

app
  .config(function ($routeProvider) {

    $routeProvider.when('/:section?', {
      templateUrl: globals.baseUrl + '/js/partials/home.html',
      controller: 'HomeController',
      reloadOnSearch: false
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  });

/*var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});*/