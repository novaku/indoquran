<?php
require 'vendor/autoload.php';
class Predis
{
	public $redis = null;
	public $host = null;
	public $port = 6379;
	
	public function connectRedis() {
		Predis\Autoloader::register();
		try {
			// $this->redis = new Predis\Client();
			$this->redis = new Predis\Client(array(
				"scheme" => "tcp",
				"host" => $this->host,
				"port" => $this->port
				)
			);
			// echo "Successfully connected to Redis IP ".$this->host.":".$this->port;
		}
		catch (Exception $e) {
			echo "Couldn't connected to Redis IP ".$this->host;
			echo $e->getMessage();
		}
	}
}