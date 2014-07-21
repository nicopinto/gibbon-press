require.config({

  // alias libraries paths
  paths: {
    'domReady': 'lib/require/requirejs-domready',
    'angular': 'lib/angular',
    'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular-route'
  },

  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      exports: 'angular-route'
    }
  },

  // kick start application
  deps: ['./bootstrap']

});