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

        getTemplate: function() {
            var template;

            switch (this.get('type')) {
                case 'content_aside':
                    template = AsideTpl;
                    break;
                case 'content_audio':
                    template = AudioTpl;
                    break;
                case 'content_featured_post':
                    template = FeaturedPostTpl;
                    break;
                case 'content_gallery':
                    template = GalleryTpl;
                    break;
                case 'content_image':
                    template = ImageTpl;
                    break;
                case 'content_link':
                    template = LinkTpl;
                    break;
                case 'content_none':
                    template = NoneTpl;
                    break;
                case 'content_page':
                    template = PageTpl;
                    break;
                case 'content_quote':
                    template = QuoteTpl;
                    break;
                case 'content_video':
                    template = VideoTpl;
                    break;
                case 'content_post':
                default:
                    template = PostTpl;
                    break;
            }

            return template;
        }

    });

    return ContentModel;

});
