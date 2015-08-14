// var directives = angular.module('app.directives', []);
// angular.module('app')
app
  .directive('slickBase', function ($scope) {

    return function (scope, element, attrs) {

      function updateTime(data) {
        var html = [];
        for (var i = 0; i < data.length; i++) {
          html.push('<div class="');
          html.push(attrs.slickClass);
          html.push('"><h3>');
          html.push(data[i].content);
          html.push('</h3></div>');
        }
        $(element).html(html.join('')).slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }

      scope.$watch(attrs.slickBase, function(value) {
        if(value) updateTime(value);
      });

    };
  });