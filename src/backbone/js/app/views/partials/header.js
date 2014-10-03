define([
    'jquery',
    'jquery.transit',
    'underscore',
    'backbone',
    'text!app/templates/header.html'
], function($, $transition, _, Backbone, HeaderTpl) {

    var Header = Backbone.View.extend({

        el: $('.header'),

        initialize: function(params) {
            this.options = params.options || {};
            this.render();
        },

        render: function() {
            var tpl = _.template(HeaderTpl);
            this.$el.html(tpl);
        }

    });

    return Header;

});