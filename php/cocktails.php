<?php 
	require_once('classes/config.php');
	
	getCocktails();
	exit();
	
	function getCocktails(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		$menu = new Menu();
		$menuData = $menu->getCocktails();
		
		print($menuData);
	}
?>