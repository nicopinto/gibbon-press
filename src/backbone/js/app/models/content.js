define([
    'underscore',
    'backbone',
    'text!app/templates/content/aside.html',
    'text!app/templates/content/audio.html',
    'text!app/templates/content/featured-post.html',
    'text!app/templates/content/gallery.html',
    'text!app/templates/content/image.html',
    'text!app/templates/content/link.html',
    'text!app/templates/content/none.html',
    'text!app/templates/content/page.html',
    'text!app/templates/content/post.html',
    'text!app/templates/content/quote.html',
    'text!app/templates/content/video.html',
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
