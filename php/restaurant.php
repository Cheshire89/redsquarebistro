<?php 
	require_once('classes/config.php');
	
	getRestaurantPage();
	exit();
	
	function getRestaurantPage(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		if(isset($_POST["page"]) && $_POST["page"] != ''){
			$restaurantPage = new Restaurant();
			$pageData = $restaurantPage->getRestaurantContent($_POST["page"]);
		}

		print($pageData);
	}

	
?>