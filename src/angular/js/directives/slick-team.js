var directives = angular.module('app.directives');

directives.directive('slickTeam', [function ($scope) {
  'use strict';

  return function (scope, element, attrs) {

    function updateTime(data) {
      var html = [];
      for (var i = 0; i < data.length; i++) {
        html.push('<div class="person">');
        html.push('<div class="img">');
        html.push('<img src="');
        html.push(data[i].featured_image.source);
        html.push('" /></div><h3>');
        html.push(data[i].title);
        html.push('</h3><span>');
        html.push(data[i].excerpt);
        html.push('</span><p>');
        html.push(data[i].content);
        html.push('</p>');
        html.push('<ul>');
        if(data[i].custom_fields.facebookUrl) {
          html.push('<li><a href="');
          html.push(data[i].custom_fields.facebookUrl[0]);
          html.push('" title="Facebook" class="icon-facebook"></a></li>');
        }
        if(data[i].custom_fields.twitterUrl) {
          html.push('<li><a href="');
          html.push(data[i].custom_fields.twitterUrl[0]);
          html.push('" title="Twitter" class="icon-twitter"></a></li>');
        }
        html.push('</ul>');
        html.push('</div>');
      }
      $(element).html(html.join('')).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      });
    }

    scope.$watch(attrs.slickTeam, function(value) {
      if(value) updateTime(value);
    });

  };
}]);