define([
    'jquery',
    'underscore',
    'backbone',
    'views/header',
    'views/footer',
    'config'
], function($, _, Backbone, HeaderView, FooterView, Config) {

    var MainPageView = Backbone.View.extend({

        el: $('#mainContainer'),

        initialize: function() {

            //TODO: cargar Header
            //TODO: cargar Footer
            //TODO: hookear vista al index.php principal

            //TODO: fetch de los posts para la seccion de blog (deberia estar en otra vista principal separada)
        }

    });

    return MainPageView;

});