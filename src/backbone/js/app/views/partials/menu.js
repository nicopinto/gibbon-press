define([
    'jquery',
    'jquery.transit',
    'underscore',
    'backbone',
    'text!templates/menu.html'
], function($, $transition, _, Backbone, MenuTpl) {

    var Menu = Backbone.View.extend({

        el: $('#menuContainer'),

        events: {
            'click .filters a': 'menuItemClick'
        },

        initialize: function(params) {
            this.options = params.options || {};
            this.render();
        },

        render: function() {
            var tpl = _.template(MenuTpl);
            this.$el.html(tpl);
        },

        menuItemClick: function(e) {
            e.preventDefault();

            $this = $(e.currentTarget);

            if (this.hashTag) {
                this.hashUrl = '/show/' + this.hashFilter + '/' + this.hashTag;
            } else {
                this.hashUrl = '/' + this.hashFilter;
            }

            this.$menusFilterList.removeClass('active');

            window.location.hash = this.hashUrl;
        }

    });

    return Menu;

});