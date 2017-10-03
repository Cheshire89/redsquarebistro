<?php 
	require_once('classes/config.php');
	
	getInfusions();
	exit();
	
	function getInfusions(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		$menu = new Menu();
		$menuData = $menu->getInfusions();
		
		print($menuData);
	}
?>