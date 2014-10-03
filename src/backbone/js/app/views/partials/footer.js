define([
    'jquery',
    'jquery.transit',
    'underscore',
    'backbone',
    'text!app/templates/footer.html'
], function($, $transition, _, Backbone, FooterTpl) {

    var FooterView = Backbone.View.extend({

        el: $('.footer'),

        initialize: function(params) {
            this.options = params.options || {};
            this.render();
        },

        render: function() {
            var tpl = _.template(FooterTpl);
            this.$el.html(tpl);
        }

    });

    return FooterView;

});