define([
    'underscore',
    'backbone',
    'text!templates/content/aside.html',
    'text!templates/content/audio.html',
    'text!templates/content/featured-post.html',
    'text!templates/content/gallery.html',
    'text!templates/content/image.html',
    'text!templates/content/link.html',
    'text!templates/content/none.html',
    'text!templates/content/page.html',
    'text!templates/content/post.html',
    'text!templates/content/quote.html',
    'text!templates/content/video.html',
], function(_, Backbone, AsideTpl, AudioTpl, FeaturedPostTpl, GalleryTpl, ImageTpl, LinkTpl, NoneTpl, PageTpl, PostTpl, QuoteTpl, VideoTpl) {

    var ContentModel = Backbone.Model.extend({

        getThumbnail: function() {
            //TODO: implement same functionality than WP in PHP --> 'twentyfourteen_post_thumbnail'
            return '';
        },

        getClassAttr: function() {
            //TODO: implement same functionality than --> 'post_class'
            return '';
        },

        getTitle: function() {
            //TODO: implement same functionality than --> 'the_title'
            return this.get('post_title');
        },

        getContent: function() {
            //TODO: implement same functionality than --> 'the_content'
            return this.get('post_content');
        },

        getExcerpt: function() {
            //TODO: implement same functionality than --> 'the_excerpt'
            return this.get('post_excerpt');
        },

        getTemplate: function() {
            var template;

            switch (this.get('type')) {
                case 'aside':
                    template = AsideTpl;
                    break;
                case 'audio':
                    template = AudioTpl;
                    break;
                case 'featured_post':
                    template = FeaturedPostTpl;
                    break;
                case 'gallery':
                    template = GalleryTpl;
                    break;
                case 'image':
                    template = ImageTpl;
                    break;
                case 'link':
                    template = LinkTpl;
                    break;
                case 'none':
                    template = NoneTpl;
                    break;
                case 'page':
                    template = PageTpl;
                    break;
                case 'quote':
                    template = QuoteTpl;
                    break;
                case 'video':
                    template = VideoTpl;
                    break;
                case 'post':
                default:
                    template = PostTpl;
                    break;
            }

            return template;
        }

    });

    return ContentModel;

});
