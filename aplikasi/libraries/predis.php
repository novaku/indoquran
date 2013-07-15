<?php
require 'predis/autoload.php';
class Predis
{
	public $redis = null;
	public $host = "54.208.82.35";
	public $port = 6379;
	
	function __construct() {
		parent::__construct();
		try {
			// $this->redis = new Predis\Client();
			$this->redis = new Predis\Client(array(
				"scheme" => "tcp",
				"host" => $this->host,
				"port" => $this->port
				)
			);
			echo "Successfully connected to Redis IP ".$this->host.":".$this->port;
		}
		catch (Exception $e) {
			echo "Couldn't connected to Redis IP ".$this->host;
			echo $e->getMessage();
		}
	}
	
	function redSet($arr = array()) {
		$this->redis->hmset($key,$arr);
	}
	
	function redGetAll($key = null) {
		$this->redis->hgetall($key);
	}
	
	function redGet($key = null) {
		$this->redis->hget($key);
	}
	
	function redDel($key = null) {
		$this->redis->hdel($key);
	}
	
	function redExist($key = null) {
		$this->redis->exists($key);
	}
}