define([
    'jquery',
    'jquery.transit',
    'underscore',
    'backbone',
    'text!templates/header.html'
], function($, $transition, _, Backbone, HeaderTpl) {

    var Header = Backbone.View.extend({

        el: $('#mainHeader'),

        initialize: function(params) {
            if (params) {
                this.options = params.options || {};   
            }
            this.render();
        },

        render: function() {
            var tpl = _.template(HeaderTpl);
            this.$el.html(tpl);
        }

    });

    return Header;

});