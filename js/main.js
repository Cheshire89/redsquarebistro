'use strict';


var app = angular.module('redSqr',['ui.router', 'ngSanitize'
  ]);

app.controller('menuBtnCtrl', function($scope){
	$scope.active = false;
	$scope.activeBtn = function(){
		$scope.active = !$scope.active;
	}
});

app.config(['$locationProvider','$stateProvider', '$urlRouterProvider', 
    function($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('root',{
      url: "/",
      views:{ 
        'main':{
          templateUrl: "views/home.html",
          controller: "homeCtrl"
        }
      }
    })
    .state('about',{
      url: "/about",
      views:{ 
        'main':{
          templateUrl: "views/about.html",
          controller: "aboutCtrl"
        }
      }
    })
    .state('contact',{
      url: "/contact",
      views:{ 
        'main':{
          templateUrl: "views/contact.html",
          controller: "contactCtrl"
        }
      }
    })
    .state('reservations',{
      url: "/reservations",
      views:{ 
        'main':{
          templateUrl: "views/reservations.html",
          controller: "reservationsCtrl"
        }
      }
    })
    .state('private-parties',{
      url: "/private-parties",
      views:{ 
        'main':{
          templateUrl: "views/private_parties.html",
          controller: "prCtrl"
        }
      }
    })

    .state('restaurant',{
      url: "/restaurant/:section",
      views:{
        'main':{

          templateUrl: "views/restaurant.html",
          controller: "restaurantCtrl"
        }
      }
    })

    .state('menu',{
      url: "/menu",
      abstract: true,
      views:{  
        'main':{
            templateUrl: "views/menu.html",
            controller: "menuCtrl"
         }
      }
    })

    .state('menu.dinner',{
      url: "/dinner",
      views:{
         'menuBanner':{
           templateUrl: "views/partials/menu/menuBanner.html",
           controller: "menuBannerCtrl"
         },
         'menu':{
           templateUrl: "views/partials/menu/menu.html",
           controller: "menuCtrl"
         }
      }
    })

    .state('menu.dessert',{
      url: "/dessert",
      views:{
         'menuBanner':{
           templateUrl: "views/partials/menu/menuBanner.html",
           controller: "menuBannerCtrl"
         },
         'menu':{
           templateUrl: "views/partials/menu/menu.html",
           controller: "menuCtrl"
         }
      }
    })

    .state('menu.bar',{
      url: "/bar",
      views:{
         'menuBanner':{
           templateUrl: "views/partials/menu/menuBanner.html",
           controller: "menuBannerCtrl"
         },
         'menu':{
           templateUrl: "views/partials/menu/menu.html",
           controller: "menuCtrl"
         },
         'wines':{
            templateUrl: "views/partials/menu/wines-by-glass.html",
            controller: "winesCtrl"
         },
         'cocktails':{
            templateUrl: "views/partials/menu/cocktails.html",
            controller: "cocktailsCtrl"
         }
      }
    })

    .state('menu.vodkaBar',{
      url: "/vodka-bar",
      views:{
         'menuBanner':{
           templateUrl: "views/partials/menu/menuBanner.html",
           controller: "menuBannerCtrl"
         },
         'vodka-bar':{
            templateUrl: "views/partials/menu/vodka-bar.html",
            controller: "vodkaBarCtrl"
         },
         'infusions':{
            templateUrl: "views/partials/menu/infusions.html",
            controller: "infusionsCtrl"
         }
      }
    });


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });

    $urlRouterProvider.when('', '/');
  	$urlRouterProvider.otherwise("/");
}]);



	

	




