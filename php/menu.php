<?php 
	require_once('classes/config.php');
	
	getMenu();
	exit();
	
	function getMenu(){
		$_POST = json_decode(file_get_contents('php://input'), true);

		if(isset($_POST["menu"]) && $_POST["menu"] != ''){
			$menu = new Menu();
			$menuData = $menu->getMenu($_POST["menu"]);
		}

		print($menuData);
	}

	
?>