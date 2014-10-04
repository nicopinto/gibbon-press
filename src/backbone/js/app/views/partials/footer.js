define([
    'jquery',
    'jquery.transit',
    'underscore',
    'backbone',
    'text!templates/footer.html'
], function($, $transition, _, Backbone, FooterTpl) {

    var FooterView = Backbone.View.extend({

        el: $('#mainFooter'),

        initialize: function(params) {
            if (params) {
                this.options = params.options || {};   
            }
            this.render();
        },

        render: function() {
            var tpl = _.template(FooterTpl);
            this.$el.html(tpl);
        }

    });

    return FooterView;

});