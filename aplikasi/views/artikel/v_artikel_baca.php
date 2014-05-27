<?php
$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']), 'https') === false ? 'http' : 'https'; // Get protocol HTTP/HTTPS
$host = $_SERVER['HTTP_HOST']; // Get  www.domain.com
$params = $_SERVER['REQUEST_URI']; // Get Parameters occupation=odesk&name=ashik
$currentUrl = $protocol . '://' . $host . $params; // Adding all
echo html_entity_decode($isi_artikel->text);
?>
<!--<div id="fb-comment-container">-->
<!--	<div id="fb-comment-title">Tambahkan Komentar</div>-->
<!--	<html xmlns:fb="http://ogp.me/ns/fb#">-->
<!--	<fb:comments href="--><?php //echo $currentUrl; ?><!--" num_posts="2" migrated="1"xid="2289"></fb:comments>-->
<!--</div>-->
<div class="fb-like" data-href="<?php echo $currentUrl; ?>" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div><br/>
<div class="fb-comments" data-href="<?php echo $currentUrl; ?>" data-numposts="5" data-colorscheme="light"></div>