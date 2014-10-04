define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/partials/header',
    'app/views/partials/footer',
    'config'
], function($, _, Backbone, Config) {

    var HomePageView = Backbone.View.extend({

        el: $('#mainContent'),

        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html('<h1>contenido insertado por el render del HomePageView.</h1>');
        }

    });

    return HomePageView;

});