'use strict';

app.controller('homeCtrl', function($scope){
	$scope.appendOtWidget = function(){
		var winWidth = $(window).width();

		if(winWidth <= 930){
			$scope.clearWidget();
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = '//www.opentable.com/widget/reservation/loader?rid=3851&domain=com&type=standard&theme=standard&lang=en-US&overlay=false&iframe=true';
			$('#otWidget').append(script);

		}else{
			$scope.clearWidget();
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = '//www.opentable.com/widget/reservation/loader?rid=3851&domain=com&type=standard&theme=wide&lang=en-US&overlay=false&iframe=true';
			$('#otWidget').append(script);
		}
	}

	$scope.clearWidget = function(){
		if($('#otWidget').children('script').length){
			$('#otWidget').empty();
		}
	}

	$scope.appendOtWidget();
	$(window).on('resize',function(){
		$scope.appendOtWidget();
	});	 
});

app.controller('menuCtrl', function($scope, $http, GetMenuService, $state){
	$scope.menuSection = $state.current.url.replace('/','');
	$scope.menu = GetMenuService.menuJson($scope.menuSection);
});

app.controller('menuBannerCtrl', function($scope, $state){
	$scope.menuSection = $state.current.url.replace('/','');
	$scope.title = function(){
		var title = '';
			switch($scope.menuSection){
				case 'bar':
					title = 'Sips & Snacks';
					break;
				default:
					title = $scope.menuSection.charAt(0).toUpperCase() + $scope.menuSection.slice(1);
					break;
			}
		return title;
	}
	$scope.bgImg = function(){
		var img = '';
			switch($scope.menuSection){
				case 'lunch':
					img = 'red_square_lunch.jpg';
					break;
				case 'dinner':
					img = 'red_square_kitchen.jpg';
					break;
				case 'dessert':
					img = 'red_square_dessert.jpg';
					break;
				case 'bar':
					img = 'sips_gray.jpg';
					break;
				case 'vodka-bar':
					img = 'red_square_vodka_bar.jpg';
					break;

			}
		return img;
	}
});

app.controller('vodkaBarCtrl', function($scope, GetVodkaBarService){
	$scope.vodka = GetVodkaBarService.vodkaBarJson();
});

app.controller('cocktailsCtrl', function($scope, GetCocktailsService){
	$scope.cocktails = GetCocktailsService.cocktailsJson();
});

app.controller('winesCtrl', function($scope, GetWinesService){
	$scope.wines = GetWinesService.winesJson();
});

app.controller('infusionsCtrl', function($scope, GetInfusionsService){
	$scope.infusions = GetInfusionsService.infusionsJson();
});

app.controller('restaurantCtrl', function($scope, $stateParams, GetRestaurantContent){
	var restaurantSection = $stateParams.section;
	$scope.content = GetRestaurantContent.restaurantPageJson(restaurantSection);
	$scope.title = restaurantSection.charAt(0).toUpperCase() + restaurantSection.slice(1);
});

app.controller('aboutCtrl', ['$scope',function($scope){
	$scope.message = 'About Ctrl';
}]);

app.controller('contactCtrl', function($scope){
	
});

app.controller('reservationsCtrl', function($scope, $http){
	 var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = '//www.opentable.com/widget/reservation/loader?rid=3851&domain=com&type=standard&theme=standard&lang=en-US&overlay=false&iframe=true';
		$('#otWidget').append(script);
});

app.controller('prCtrl', ['$scope',function($scope){
	$scope.message = 'Private Parties Ctrl';
}]);

app.controller('navigationCtrl', function($scope){

	$('ul.nav li.dropdown').hover(function() {
	  	$scope.showMenu($(this));
	}, function() {
	  	$scope.hideMenu($(this));
	});


	$scope.showMenu = function showMenu(elem){
		var winWidth = $(window).width();
		var menu = elem.find('.dropdown-menu');

		if(winWidth <= 768){
			menu.stop(true,true).slideDown();
		}else{
			menu.stop(true,true).show();
		}
	}

	$scope.hideMenu = function(elem){
		var winWidth = $(window).width();
		var menu = elem.find('.dropdown-menu');

		if(winWidth <= 768){
			menu.stop(true,true).slideUp();
		}else{
			menu.stop(true,true).hide();
		}
	}
});










