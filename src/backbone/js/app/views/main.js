define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/partials/header',
    'app/views/partials/footer',
    'config'
], function($, _, Backbone, HeaderView, FooterView, Config) {

    var MainPageView = Backbone.View.extend({

        el: $('#mainContainer'),

        initialize: function() {

            //TODO: cargar Header
            //TODO: cargar Footer
            //TODO: hookear vista al index.php principal

            //TODO: fetch de los posts para la seccion de blog (deberia estar en otra vista principal separada)
            this.render();
        },
        render: function() {
            this.$el.html('<h1>contenido insertado por el render del MainPageView.</h1>');
        }

    });

    return MainPageView;

});