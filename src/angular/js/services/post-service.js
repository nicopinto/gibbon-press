define(['./module'], function (services) {
  //'use strict';

  services.service('PostService', function ($http) {

    this.get = function (callback, id) {
      $http
        ({method: 'GET', url: '/wp-json/posts'})
        .success(function (data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          callback(null, data);
        })
        .error(function (data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          callback(true, data);
        });
    };
    
  });

});