//'use strict';

angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.services',
  //'app.filters',
  'app.directives'
]).config(function ($routeProvider) {

  $routeProvider.when('/:section?', {
    templateUrl: globals.baseUrl + '/js/partials/home.html',
    controller: 'Home',
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