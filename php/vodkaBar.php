<?php 
	require_once('classes/config.php');
	
	getVodka();
	exit();
	
	function getVodka(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		$menu = new Menu();
		$menuData = $menu->getVodka();
		
		print($menuData);
	}
?>