<?php 

	class Restaurant extends masterSQL{
		function __constructor(){

		}

		function getRestaurantContent($page){
			$db = db::instance();
			$data = $this->select('restaurant', array("*"), array('pageTitle'=>$page));
			return $this->pageDataToJson($data);
		}

		function pageDataToJson($data){
			$result=array();

			while($row =  mysqli_fetch_assoc($data)){
				$imgsArr = explode(',', $row["pageImgs"]);

				$jsonArrayObj = array(
					'pageTitle' => $row["pageTitle"],
					'pageText' => $row["pageText"],
					'pageImages' => $imgsArr
				);

				array_push($result, $jsonArrayObj);
			}	

			return json_encode($result);
		}

	}

?>