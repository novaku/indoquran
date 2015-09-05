<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
$config['base_url']             = 'http://' . $_SERVER["HTTP_HOST"] . '/';
$config['index_page']           = 'index.php';
$config['uri_protocol']         = 'AUTO';
$config['url_suffix']           = '.nhk';
$config['language']             = 'english';
$config['charset']              = 'UTF-8';
$config['enable_hooks']         = true;
$config['subclass_prefix']      = 'MY_';
$config['permitted_uri_chars']  = 'a-z 0-9~%.:_\-';
$config['allow_get_array']      = true;
$config['enable_query_strings'] = false;
$config['controller_trigger']   = 'c';
$config['function_trigger']     = 'm';
$config['directory_trigger']    = 'd'; // experimental not currently in use
$config['log_threshold']        = 0;
$config['log_path']             = '';
$config['log_date_format']      = 'Y-m-d H:i:s';
$config['cache_path']           = '';
$config['encryption_key']       = 'BgZc4Dp3ydNheYp5CZtwn3rLQEsI0xGd';
$config['sess_cookie_name']     = 'ci_session';
$config['sess_expiration']      = 7200;
$config['sess_expire_on_close'] = true;
$config['sess_encrypt_cookie']  = false;
$config['sess_use_database']    = false;
$config['sess_table_name']      = 'ci_sessions';
$config['sess_match_ip']        = false;
$config['sess_match_useragent'] = true;
$config['sess_time_to_update']  = 300;
$config['cookie_prefix']        = "";
$config['cookie_domain']        = "";
$config['cookie_path']          = "/";
$config['cookie_secure']        = false;
$config['global_xss_filtering'] = false;
$config['csrf_protection']      = false;
$config['csrf_token_name']      = 'csrf_test_name';
$config['csrf_cookie_name']     = 'csrf_cookie_name';
$config['csrf_expire']          = 7200;
$config['compress_output']      = false;
$config['time_reference']       = 'local';
$config['rewrite_short_tags']   = false;
$config['proxy_ips']            = '';
$config['quran_img']            = 'http://c00022506.cdn1.cloudfiles.rackspacecloud.com/';
$config['quran_mp3']            = 'http://www.everyayah.com/data/Ibrahim_Akhdar_32kbps/';
$config['redis_host']           = '50.112.178.129';
$config['redis_port']           = 6379;
$config['usecdn']               = true;
$config['usememcached']         = true;
$config['juz-data']             = array (
	array (
		'id'   => 1,
		'start' => 'Juz-1',
		'desc' => 'Juz - 1 (Al-Fatihah:1 - Al-Baqarah:141)'
	),
	array (
		'id'   => 2,
		'start' => 'Juz-2',
		'desc' => 'Juz - 2 (Al-Baqarah:142 - Al-Baqarah:252)'
	),
	array (
		'id'   => 3,
		'start' => 'Juz-3',
		'desc' => 'Juz - 3 (Al-Baqarah:253 - Ali \'Imran:91)'
	),
	array (
		'id'   => 4,
		'start' => 'Juz-4',
		'desc' => 'Juz - 4 (Ali \'Imran:92 - An-Nisa\':23)'
	),
	array (
		'id'   => 5,
		'start' => 'Juz-5',
		'desc' => 'Juz - 5 (An-Nisa\':24 - An-Nisa\':147)'
	),
	array (
		'id'   => 6,
		'start' => 'Juz-6',
		'desc' => 'Juz - 6 (An-Nisa\':148 - Al-Ma\'idah:82)'
	),
	array (
		'id'   => 7,
		'start' => 'Juz-7',
		'desc' => 'Juz - 7 (Al-Ma\'idah:83 - Al-An\'am:10)'
	),
	array (
		'id'   => 8,
		'start' => 'Juz-8',
		'desc' => 'Juz - 8 (Al-An\'am:11 - Al-A\'raf:87)'
	),
	array (
		'id'   => 9,
		'start' => 'Juz-9',
		'desc' => 'Juz - 9 (Al-A\'raf:88 - Al-Anfal:40)'
	),
	array (
		'id'   => 10,
		'start' => 'Juz-10',
		'desc' => 'Juz - 10 (Al-Anfal:41 - At-Taubah:93)'
	),
	array (
		'id'   => 11,
		'start' => 'Juz-11',
		'desc' => 'Juz - 11 (At-Taubah:94 - Hud:5)'
	),
	array (
		'id'   => 12,
		'start' => 'Juz-12',
		'desc' => 'Juz - 12 (Hud:6 - Yusuf:52)'
	),
	array (
		'id'   => 13,
		'start' => 'Juz-13',
		'desc' => 'Juz - 13 (Yusuf:53 - Al-Hijr:1)'
	),
	array (
		'id'   => 14,
		'start' => 'Juz-14',
		'desc' => 'Juz - 14 (Al-Hijr:2 - An Nahl:128)'
	),
	array (
		'id'   => 15,
		'start' => 'Juz-15',
		'desc' => 'Juz - 15 (Al-Isra\':1 - Al-Kahf:74)'
	),
	array (
		'id'   => 16,
		'start' => 'Juz-16',
		'desc' => 'Juz - 16 (Al-Kahf:75 - Ta Ha:135)'
	),
	array (
		'id'   => 17,
		'start' => 'Juz-17',
		'desc' => 'Juz - 17 (Al-Anbiya:1 - Al Hajj:78)'
	),
	array (
		'id'   => 18,
		'start' => 'Juz-18',
		'desc' => 'Juz - 18 (Al-Mu\'minun:1 - Al-Furqan:20)'
	),
	array (
		'id'   => 19,
		'start' => 'Juz-19',
		'desc' => 'Juz - 19 (Al-Furqan:21 - An-Naml:59)'
	),
	array (
		'id'   => 20,
		'start' => 'Juz-20',
		'desc' => 'Juz - 20 (An-Naml:60 - Al-\'Ankabut:44)'
	),
	array (
		'id'   => 21,
		'start' => 'Juz-21',
		'desc' => 'Juz - 21 (Al-\'Ankabut:45 - Al-Ahzab:30)'
	),
	array (
		'id'   => 22,
		'start' => 'Juz-22',
		'desc' => 'Juz - 22 (Al-Ahzab:31 - Ya Sin:21)'
	),
	array (
		'id'   => 23,
		'start' => 'Juz-23',
		'desc' => 'Juz - 23 (Ya Sin:22 - Az-Zumar:31)'
	),
	array (
		'id'   => 24,
		'start' => 'Juz-24',
		'desc' => 'Juz - 24 (Az-Zumar:32 - Fussilat:46)'
	),
	array (
		'id'   => 25,
		'start' => 'Juz-25',
		'desc' => 'Juz - 25 (Fussilat:47 - Al-Jasiyah:37)'
	),
	array (
		'id'   => 26,
		'start' => 'Juz-26',
		'desc' => 'Juz - 26 (Al-Ahqaf:1 - Az-Zariyat:30)'
	),
	array (
		'id'   => 27,
		'start' => 'Juz-27',
		'desc' => 'Juz - 27 (Az-Zariyat:31 - Al-Had"id":29)'
	),
	array (
		'id'   => 28,
		'start' => 'Juz-28',
		'desc' => 'Juz - 28 (Al-Mujadilah:1 - At-Tahrim:12)'
	),
	array (
		'id'   => 29,
		'start' => 'Juz-29',
		'desc' => 'Juz - 29 (Al-Mulk:1 - Al-Mursalat:50)'
	),
	array (
		'id'   => 30,
		'start' => 'Juz-30',
		'desc' => 'Juz - 30 (An-Naba\':1 - An-Nas:6)'
	),
);

/* End of file config.php */
/* Location: ./application/config/config.php */
