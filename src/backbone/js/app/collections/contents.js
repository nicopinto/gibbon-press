define([
    'underscore',
    'backbone',
    'config',
    'app/models/content'
], function(_, Backbone, Config, ContentModel) {

    var _url = '/?json_route=/posts';
    //var _url = '/wp-json/posts';

    var ContentCollection = Backbone.Collection.extend({

        model: ContentModel,

        url: function () {
            return (this.post_id) ? _url + '/' + this.post_id : _url;
        }

    });

    return ContentCollection;

});