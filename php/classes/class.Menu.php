<?php 
	class Menu extends masterSQL{

		function __constructor(){

		}

		function getMenu($menuSection){
			$db = db::instance();
			$data = $this->select('menu', array("*"), array('menuType'=>$menuSection));
			return $this->menuToJson($data, $menuSection);
		}

		function getCocktails(){
			$db = db::instance();
			$data = $this->select('cocktails', array("*"));
			return $this->cocktailsToJson($data);
		}

		function getInfusions(){
			$db = db::instance();
			$data = $this->select('infusions', array("*"));
			return $this->infusionsToJson($data);
		}

		function getWines(){
			$db = db::instance();
			$data = $this->select('wines', array("*"));
			return $this->winesToJson($data);
		}

		function getVodka(){
			$db = db::instance();
			$data = $this->select('vodkabar', array("*"));
			return $this->vodkaToJson($data);
		}

		function menuToJson($data, $menuSection){
			$result=array();

			while($row =  mysqli_fetch_assoc($data)){
				$menuSection = $row["menuSection"];

				if(!isset($result[$menuSection])){
					$menuSection = $row["menuSection"];
					$result[$menuSection] = array();
				}

				$jsonArrayObj = array(
					'itemTitle' => $row["itemTitle"],
					'itemDesc' => $row["itemDesc"],
					'itemPrice' => $row["itemPrice"]
				);

				array_push($result[$menuSection], $jsonArrayObj);
			}	

			return json_encode($result);
		}

		function cocktailsToJson($data){
			$result=array();
			$result['cocktails'] = array();

			while($row =  mysqli_fetch_assoc($data)){	

				$jsonArrayObj = array(
					'cocktailTitle' => $row["cocktailTitle"],
					'cocktailDesc' => $row["cocktailDesc"],
					'cocktailPrice' => $row["cocktailPrice"]
				);

				array_push($result['cocktails'], $jsonArrayObj);
			}	

			return json_encode($result);
		}

		function infusionsToJson($data){
			$result=array();
			$result['infusions'] = array();

			while($row =  mysqli_fetch_assoc($data)){	

				$jsonArrayObj = array(
					'infusionTitle' => $row["infusionTitle"]
				);

				array_push($result['infusions'], $jsonArrayObj);
			}	

			return json_encode($result);
		}

		function winesToJson($data){
			$result=array();
			
			while($row =  mysqli_fetch_assoc($data)){
				$wineType = $row["wineType"];

				if(!isset($result[$wineType])){
					$wineType = $row["wineType"];
					$result[$wineType] = array();
				}	

				$jsonArrayObj = array(
					'wineTitle' => $row["wineTitle"],
					'wineCountry' => $row["wineCountry"],
					'winePrice' => $row["winePrice"]
				);

				array_push($result[$wineType], $jsonArrayObj);
			}	

			return json_encode($result);
		}

		function vodkaToJson($data){
			$result=array();
			
			while($row =  mysqli_fetch_assoc($data)){
				$vodkaCountry = $row["vodkaCountry"];

				if(!isset($result[$vodkaCountry])){
					$vodkaCountry = $row["vodkaCountry"];
					$result[$vodkaCountry] = array();
				}	

				$jsonArrayObj = array(
					'vodkaTitle' => $row["vodkaTitle"],
					'priceShot' => $row["priceShot"],
					'priceCarafe' => $row["priceCarafe"]
				);

				array_push($result[$vodkaCountry], $jsonArrayObj);
			}	

			return json_encode($result);
		}


	}
?>