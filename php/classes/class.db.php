<?php
	class db {
		public static $instance;
		public static function instance() {	
			if (!isset(self::$instance)) {
				self::$instance = new mysqli(DBSERVER, DBUSER, DBPASS, DBNAME);
				self::$instance -> set_charset("utf8");
			}
			return self::$instance;	
		}
	}
?>