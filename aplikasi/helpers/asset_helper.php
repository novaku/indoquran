<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
function usecdnfunc()
{
	$CI =& get_instance();
	return $CI->config->item('usecdn');
}


function css_asset($asset_name)
{
	return '<link href="' . base_url('assets/css/' . $asset_name) . '" rel="stylesheet" type="text/css"/>';
}

function image_asset($asset_name)
{
	list($width, $height, $type, $attr) = @getimagesize(base_url() . 'assets/images/' . $asset_name);
	return '<img src="' . base_url('assets/images/' . $asset_name) . '" ' . $attr . ' />';
}

function js_asset($asset_name)
{
	return '<script type="text/javascript" src="' . base_url('assets/js/' . $asset_name) . '"></script>';
}

function data_image($asset_name)
{
	return '<img src="' . base_url('assets/images/data/' . $asset_name) . '"/>';
}

function path_asset($asset_name)
{
	return base_url('assets/' . $asset_name);
}

function extjs_asset_css()
{
	$asset_local = '
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/resources/css/ext-all.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/ux/css/TabScrollerMenu.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/ux/css/CheckHeader.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/tabs/tabs-adv.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/tabs/tabs.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/ux/grid/css/GridFilters.css') . '" />
<link rel="stylesheet" type="text/css" href="' . base_url('assets/extjs/examples/ux/grid/css/RangeMenu.css') . '" />
	';
	$asset_cdn = '
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux/css/TabScrollerMenu.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux/css/CheckHeader.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/tabs/tabs-adv.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/tabs/tabs.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux/grid/css/GridFilters.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux/grid/css/RangeMenu.css" />
	';
	if (usecdnfunc()) {
		return $asset_cdn;
	} else {
		return $asset_local;
	}
}

function extjs_asset_js()
{
	$asset_local = '
<script type="text/javascript">document.getElementById("loading-message").innerHTML = \'<font face="tahoma" color="white">Memuat Style...</font>\';</script>
<script type="text/javascript">document.getElementById("loading-message").innerHTML = \'<font face="tahoma" color="white">Memuat System..</font>\';</script>
<script type="text/javascript" src="' . base_url('assets/extjs/ext-all.js') . '"></script>
<script type="text/javascript">document.getElementById("loading-message").innerHTML = \'<font face="tahoma" color="white">Memuat Aplikasi...</font>\';</script>
<script type="text/javascript">document.getElementById("loading-message").innerHTML = \'<font face="tahoma" color="white">Inisialisasi...</font>\';</script>
<!-- aplikasi js -->';

	$asset_cdn = '
<script type="text/javascript">document.getElementById(\'loading-message\').innerHTML = \'<font face="tahoma" color="white">Memuat Style...</font>\';</script>
<script type="text/javascript">document.getElementById(\'loading-message\').innerHTML = \'<font face="tahoma" color="white">Memuat System..</font>\';</script>
<script type="text/javascript" src="http://cdn.sencha.io/ext-4.1.1-gpl/ext-all.js"></script>
<script type="text/javascript">document.getElementById(\'loading-message\').innerHTML = \'<font face="tahoma" color="white">Memuat Aplikasi...</font>\';</script>
<script type="text/javascript">document.getElementById(\'loading-message\').innerHTML = \'<font face="tahoma" color="white">Inisialisasi...</font>\';</script>
<!-- aplikasi js -->
	';

	$asset_app_js = js_asset('initVar.js');
	$asset_app_js .= js_asset('funcVar.js');
	$asset_app_js .= js_asset('quran.js');

	if (usecdnfunc()) {
		return $asset_cdn . $asset_app_js;
	} else {
		return $asset_local . $asset_app_js;
	}
}

function quran_mp3($filenya, $ustadz = 'http://www.everyayah.com/data/Hudhaify_32kbps/')
{
	$asset_local = '
<object width="480" height="24" id="audioplayer1" data="' . base_url('assets/swf/player.swf') . '" type="application/x-shockwave-flash"><param value="assets/swf/player.swf" name="movie"><param value="playerID=1&amp;bg=0xEFEFEF&amp;leftbg=0xCCCCCC&amp;lefticon=0x666666&amp;rightbg=0xB6E1E1&amp; rightbghover=0x9BA948&amp;righticon=0x798732&amp;righticonhover=0xFFFFFF&amp; text=0x666666&amp;slider=0x666666&amp;track=0xFFFFFF&amp;border=0x666666&amp;loader=0xEDF4CA&amp;soundFile=assets/quran_mp3/' . $filenya . '" name="FlashVars"><param value="high" name="quality"><param value="false" name="menu"><param value="transparent" name="wmode"></object>
	';

	$asset_cdn = '
<object width="480" height="24" id="audioplayer1" data="' . base_url('assets/swf/player.swf') . '" type="application/x-shockwave-flash"><param value="' . base_url() . 'assets/swf/player.swf" name="movie"><param value="playerID=1&amp;bg=0xEFEFEF&amp;leftbg=0xCCCCCC&amp;lefticon=0x666666&amp;rightbg=0xB6E1E1&amp; rightbghover=0x9BA948&amp;righticon=0x798732&amp;righticonhover=0xFFFFFF&amp; text=0x666666&amp;slider=0x666666&amp;track=0xFFFFFF&amp;border=0x666666&amp;loader=0xEDF4CA&amp;soundFile=' . $ustadz . $filenya . '" name="FlashVars"><param value="high" name="quality"><param value="false" name="menu"><param value="transparent" name="wmode"></object>
	';
	if (usecdnfunc()) {
		return $asset_cdn;
	} else {
		return $asset_local;
	}
}

function quran_mp3_js($filenya, $ustadz = 'http://www.everyayah.com/data/Hudhaify_32kbps/', $ayatInfo = null)
{
	$asset_cdn   = '<a href="' . $ustadz . $filenya . '">' . $filenya . '</a>';
	$asset_local = '<p><a href="' . base_url('assets/quran_mp3/' . $filenya) . '" class="sm2_button">' . $ayatInfo . '</a> ' . $ayatInfo . '</p>';
	if (usecdnfunc()) {
		return $asset_cdn;
	} else {
		return $asset_local;
	}
}

function quran_img($filenya, $src = 'http://c00022506.cdn1.cloudfiles.rackspacecloud.com/')
{
	// list($width, $height, $type, $attr) = @getimagesize('assets/quran_img/'.$filenya);
	list($width, $height, $type, $attr) = @getimagesize($src . $filenya);
	$asset_cdn   = '<img class="img-responsive" src="' . $src . $filenya . '" ' . $attr . ' />';
	$asset_local = '<img class="img-responsive" src="' . base_url('assets/quran_img/' . $filenya) . '" ' . $attr . ' />';
	if (usecdnfunc()) {
		return $asset_cdn;
	} else {
		return $asset_local;
	}
}
