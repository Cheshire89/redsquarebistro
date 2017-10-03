<?php 
	require_once('classes/config.php');
	
	getWines();
	exit();
	
	function getWines(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		$menu = new Menu();
		$menuData = $menu->getWines();
		
		print($menuData);
	}
?>