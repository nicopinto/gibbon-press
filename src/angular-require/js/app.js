define([
  'angular',
  'angular-route',
  './services/index',
  './filters/index',
  './directives/index',
  './controllers/index'
], function (ng) {
  'use strict';
  
  return ng.module('app', [
    'ngRoute',
    'app.services',
    'app.filters',
    'app.directives',
    'app.controllers'
  ]);
});