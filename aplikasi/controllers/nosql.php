<?php
class Nosql extends CI_Controller {
	function __construct() {
		parent::__construct();
		$this->load->library('predis');
		$this->predis->host = $this->config->item('redis_host');
		$this->predis->port = $this->config->item('redis_port');
		$this->predis->connectRedis();
	}
	
	function index() {
		$db = $this->db->get('surah');
		foreach ( $db->result() as $row ) {
       		$this->predis->redis->hset("surah", $row->id, json_encode(array('nama'=>$row->nama,'arti'=>$row->arti)));
		}
	}
}