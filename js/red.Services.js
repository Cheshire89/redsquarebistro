'use strict';

app.factory('GetMenuService', function($http){
	return {
		menuJson: function(menuSection){
			var menuObj = {};

			$http({
				method: 'POST',
				url:'php/menu.php',
				data: {
					menu: menuSection
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

			}).then(function(resp){
			       menuObj.menuData = resp.data;
				}, function(error){
				   console.log(error);
			});

			return menuObj;
		}
	};
});

app.factory('GetCocktailsService', function($http){
	return {
		cocktailsJson: function(){
			var cocktailsObj = {};
			$http({
				method: 'POST',
				url:'php/cocktails.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(resp){
			    	cocktailsObj.cocktailsData = resp.data;
			}, function(error){
					console.error(error);
			});

			return cocktailsObj;
		}
	}
});

app.factory('GetWinesService', function($http){
	return {
		winesJson: function(){
			var winesObj = {};

			$http({
				method: 'POST',
				url:'php/wines.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(resp){
			    	winesObj.winesData = resp.data;
			}, function(error){
					console.error(error);
			});

			return winesObj;
		}
	}
});

app.factory('GetVodkaBarService', function($http){
	return {
		vodkaBarJson: function(){
			var vodkaObj = {};

			$http({
				method: 'POST',
				url:'php/vodkaBar.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(resp){
			    	vodkaObj.vodkaData = resp.data;
			}, function(error){
					console.error(error);
			});

			return vodkaObj;
		}
	}
});


app.factory('GetInfusionsService', function($http){
	return {
		infusionsJson: function(){
			var infusionsObj = {};
			$http({
				method: 'POST',
				url:'php/infusions.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(resp){
			    	infusionsObj.infusionsData = resp.data;
			}, function(error){
					console.error(error);
			});

			return infusionsObj;
		}
	}
});


app.factory('GetRestaurantContent', function($http){
	return {
		restaurantPageJson: function(page){
			var pageObj = {};
			$http({
				method: 'POST',
				url:'php/restaurant.php',
				data:{
					page: page
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(resp){
			       pageObj.pageData = resp.data;
				}, function(error){
				   console.log(error);
			});

			return pageObj;
		}
	}
});
