define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/partials/header',
    'app/views/partials/footer',
    'app/views/pages/home',
    'app/collections/contents',
    'config'
], function($, _, Backbone, HeaderView, FooterView, HomePage, ContentCollection, Config) {

    var MainPageView = Backbone.View.extend({

        el: $('#mainContainer'),

        initialize: function () {
            new HeaderView();
            new FooterView();
            new HomePage();

            //Test wp-json API
            this.col = new ContentCollection();
            this.col.fetch({
                success: function (response) {
                    console.log('ContentCollection fetched', response);
                }
            });
        },
        render: function () {
            //do nothing
        }

    });

    return MainPageView;

});