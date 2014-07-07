/**
* @module loader (controllers/index.js)
* --
* @description That’s just an empty define block with all module components included.
* You don’t need to mention module.js here as it’s already required by components.
* Loader is included as dependency of top level app module.
* And that’s actually how RequireJS knows about files to load.
*/

define([
  './home',
  './my-ctrl-1'
], function () {

});