<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Nova
 * Date: 23/09/2014
 * Time: 20:42
 */
function json_encode_new($obj = null)
{
	if(!is_null($obj)) {
		return json_encode($obj,JSON_NUMERIC_CHECK);
	} else {
		return null;
	}
}