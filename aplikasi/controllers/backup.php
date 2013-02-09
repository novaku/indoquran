<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Backup extends CI_Controller {
	function index() {
		//vars=========================
		$dbhost = $this->db->hostname;
		$dbuser = $this->db->username;
		$dbpass = $this->db->password;
		$dbname = $this->db->database;

		$q_path = '/quran/db_backup/';
		$path = str_replace($_SERVER['SCRIPT_NAME'], '', $_SERVER['SCRIPT_FILENAME']) . $q_path;
		//=============================
		
		$backup_file = $path.$dbname . date("Y-m-d-H-i-s") . '.sql';
		// $command = "D:\\xampp\mysql\bin\mysqldump --opt -h $dbhost -u $dbuser -p$dbpass ".$dbname." > ".$backup_file;
		// echo $command;
		// system($command);
		$query = $this->db->query("SHOW TABLES");
		foreach ($query->result() as $row) {
			echo $row->Tables_in_quran1."<br>";
			$qColumn = $this->db->query("SHOW COLUMNS FROM ".$row->Tables_in_quran1);
			foreach ($qColumn->result() as $rColumn) {
				echo $rColumn->Field."<br>";
			}
		}
	}
}