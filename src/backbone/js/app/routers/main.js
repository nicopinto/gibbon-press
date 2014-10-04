define([
  'jquery',
  'underscore',
  'backbone',
  'modules/helpers/Detector',
  'modules/helpers/ga-tracker'
], function($, _, Backbone, Detector, Tracker) {

  var router, grid, view, filtersView, gridsCollection, taggedsCollection, _filterName, documentWidth = 0, firstTimeLoad = true, previousFilter,

    MainRouter = Backbone.Router.extend({
      routes: {
        '!/all(/:contentName)': 'openAll',
        '!/filter/:filterName(/:contentName)': 'openFilter',
        '*actions': 'defaultAction'
      },

      defaultAction: function(url) {
        this.navigate('!/all', {trigger:true});
      },

      openAll: function(contentName) {

        if(contentName && firstTimeLoad) {
          //grid.prependFirst(contentName);
        }else if(!contentName && firstTimeLoad) {
          //TRACK: LANDING On Page Load
          Tracker.trigger('landing_init_load.page');
        }

        if( firstTimeLoad || (previousFilter !== 'all') ) {
          grid.setupGrid('all', contentName);
          filtersView.setFilterActive('all');
          herospace.switchHerospace('__DEFAULT__');
        }

        if (contentName) {
          grid.openDetail(contentName);
        }

        firstTimeLoad = false;
        previousFilter = 'all';
      },

      openFilter: function(filterName, contentName) {

        if( firstTimeLoad || (previousFilter !== filterName) ) {
          grid.setupGrid(filterName, contentName);
          filtersView.setFilterActive(filterName);
          herospace.switchHerospace(filterName);
        }

        if (contentName) {
          grid.openDetail(contentName);
        }

        firstTimeLoad = false;
        previousFilter = filterName;
      }
      
    }),

    initialize = function( Views, PageView ) {
      grid = Views.itemGridView;
      filtersView = Views.filtersView;
      herospace = Views.herospaceView;
      view = PageView;
      router = new MainRouter();
      Backbone.history.start();
      return router;
    };

  return {
    initialize: initialize
  };

});