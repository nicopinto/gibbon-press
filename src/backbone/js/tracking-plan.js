define([
  'jquery'
], function($){

  var category = 'ga_category',
    basePath = 'url_base',
    TrackingPlan = {
      'Plan':{
        /************************
        * LANDING PAGE
        */
        'landing_init_load.page': {
          'parameters': [basePath]
        },

        /************************
        * Common FILTERS
        */
        'landing_click_filter': {
          'parameters': [category, 'filter', 'filterby_${filterName}']
        },
        'landing_click_filter_submenu': {
          'parameters': [category, 'filter_${menu}', 'filter_${subMenu}']
        },

        /************************
        * New FILTERS
        */
        'landing_filter_expand_click': { 
          'parameters': [category, 'filter_expand']
        },
        'landing_filter_apply_click': {
          'parameters': [category, 'm_${mainFilterSelected}/s_${sideFilterSelected}/t_${timeFilterSelected}'] //lookbook_grilling','m_1:2:4:5/s_2:3/t_2:4'
        },

        /**********************
        * GLOBAL
        */
        'global_backtotop': {
          'parameters': [category, 'backtotop']
        }

      }
    };

    TrackingPlan.category = category;
    TrackingPlan.basePath = basePath;

  return TrackingPlan;

});