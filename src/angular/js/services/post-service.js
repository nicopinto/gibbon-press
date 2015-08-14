//var services = angular.module('app.services', []);
//angular.module('app')
app
  .service('PostService', function ($http) {

    var baseURL = '/wp-json/posts';

    function _addPage (url, params) {
      if (params && params.page) {
        if (url.indexOf('?') > -1) {
          url += '&page=' + params.page;
        }else{
          url += '?page=' + params.page;
        }
      }
      return url;
    }

    this.get = function (callback, params) {
      var url = baseURL;
      if (params && params.id) {
        url = url + '/' + params.id;
      }

      url = _addPage(url, params);

      $http
        ({method: 'GET', url: url})
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

    this.getByType = function (callback, params) {
      var url = baseURL;
      if (params && params.type) {
        url = url + '?type=' + params.type;
      }

      url = _addPage(url, params);

      $http
        ({method: 'GET', url: url})
        .success(function (data, status, headers, config) {
          callback(null, data);
        })
        .error(function (data, status, headers, config) {
          callback(true, data);
        });
    };

    this.getContentType = function (callback, params) {
      var url = baseURL;
      if (params && params.type) {
        url = url + '/types/' + params.type;
      }

      url = _addPage(url, params);

      $http
        ({method: 'GET', url: url})
        .success(function (data, status, headers, config) {
          callback(null, data);
        })
        .error(function (data, status, headers, config) {
          callback(true, data);
        });
    };

    this.search = function (callback, params) {
      var url = baseURL;
      if (params && params.term) {
        url = url + '?filter[s]=' + params.term;
      }

      url = _addPage(url, params);

      $http
        ({method: 'GET', url: url})
        .success(function (data, status, headers, config) {
          callback(null, data);
        })
        .error(function (data, status, headers, config) {
          callback(true, data);
        });
    };
    
  }); //service end
