define(['./app'], function (app) {
  'use strict';

  return app.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider.when('/home', {
      templateUrl: directory.path + '/js/partials/home.html',
      controller: 'Home'
    });

    $routeProvider.when('/view1', {
      templateUrl: directory.path + '/js/partials/partial1.html',
      controller: 'MyCtrl1'
    });

    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }]);

});