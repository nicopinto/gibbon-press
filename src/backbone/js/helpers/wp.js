define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    /** WPHelper has methods similar wordpress to use on the templating system */

    var WPHelper = {

        is_search: function() {
            //TODO: implement a method to know when is searchin or not, similar to $wp_query->isSearch()
            return false;
        }

    };

    return WPHelper;

});