<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<title><?=$judul?></title>
	<link rel="shortcut icon" href="<?=base_url()?>assets/ico/32.png">
	<?=css_asset('quran.css')?>
	<style type="text/css">
		sup {background-color: green;color: yellow;font-size:12px}
	</style>
</head>
<body>
<h3 align="center"><a href="<?=base_url()?>">Kembali ke Website Utama</a></h3>
<div style="margin-left:20px;margin-top:20px;margin-right:20px;">
	<h2><?=$judul?></h2>
	<hr noshade size="1">
	<?=$display?>
	<p align="center">
	<a href="javascript:null(0)" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); return false;"><?=image_asset('fb_share.png')?></a></p>
	<center><?=$navi?></center>
</div>
<p id='msg'></p>
<h3 align="center"><a href="<?=base_url()?>">Kembali ke Website Utama</a></h3>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40015895-1', 'indoquran.web.id');
  ga('send', 'pageview');

</script>
</body>
</html>