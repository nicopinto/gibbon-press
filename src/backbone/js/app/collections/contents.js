define([
    'underscore',
    'backbone',
    'config',
    'app/models/content'
], function(_, Backbone, Config, ContentModel) {

    var ContentCollection = Backbone.Collection.extend({

        model: ContentModel,

        url: function () {
            return (this.post_id) ? '/wp-json/posts/' + this.post_id : '/wp-json/posts';
        },

    });

    return ContentCollection;

});