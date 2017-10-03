app.directive('slickSlider', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        priority: 0,
        link: function ($scope, attrs) {
              $('.slider').slick({
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight: false
              });
        }
    }
}]);

app.directive('initMap', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        priority: 0,
        link: function (){ 
            var coordinates = [39.748333, -104.997539];
            var latLng = new google.maps.LatLng(coordinates[0], coordinates[1]);
            
            var mapOptions = {
                zoom: 17, // initialize zoom level - the max value is 21
                streetViewControl: false, // hide the yellow Street View pegman
                scaleControl: true, // allow users to zoom the Google Map
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: latLng,
                styles: [{"stylers":[{"hue":"#dd0d0d"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [
                      { visibility: "off" }
                    ]
                  }],
                zoomControl: true
            };
          
            
            var mapDiv = document.getElementById('map');
            var map = new google.maps.Map(mapDiv,mapOptions);
        
            var marker = new google.maps.Marker({
              position: latLng,
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP
            });
        }
    }
}]);