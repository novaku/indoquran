<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<title>AL Quran Digital Online : Indonesian Translation &middot; <?=$judul?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="<?=base_url()?>assets/ico/32.png">
	<meta name="author" content="Nova Herdi Kusumah (novaherdi@gmail.com)">
	<meta property="og:title" content="<?=$judul?>" />
	<meta property="og:site_name" content="AL-Quran Digital Online : Indonesian Translation">
	<meta property="og:description" content="Alquran Digital moderen dengan tarjamah bahasa Indonesia" />
	<meta property="og:image" content="<?=$quran_image?>" />
	<meta property="og:type" content="religious">
	<link href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
	<link href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.min.css" rel="stylesheet">
	<?=css_asset('quran.css')?>
	<?=css_asset('docs.css')?>
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?=base_url()?>assets/ico/144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?=base_url()?>assets/ico/114.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?=base_url()?>assets/ico/72.png">
	<link rel="apple-touch-icon-precomposed" href="<?=base_url()?>assets/ico/57.png">
	<link rel="shortcut icon" href="<?=base_url()?>assets/ico/32.png">
</head>
<body>
<div class="container">
<div class="row">
<div class="bs-docs-example">
<p align="center">
<!-- AddThis Button BEGIN -->
<div class="addthis_toolbox addthis_default_style addthis_32x32_style">
<a class="addthis_button_preferred_1"></a>
<a class="addthis_button_preferred_2"></a>
<a class="addthis_button_preferred_3"></a>
<a class="addthis_button_preferred_4"></a>
<a class="addthis_button_compact"></a>
<a class="addthis_counter addthis_bubble_style"></a>
</div>
<script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4f801bfd4ebb5319"></script>
<!-- AddThis Button END -->
</p>
<p align="center"><a class="btn btn-large btn-block" href="<?=base_url()?>"><i class="icon-home"></i> Kembali ke Website Utama</a></p>
<hr noshade size="1">
<b><?=$judul?></b>
<hr noshade size="1">
<p><?=$display?></p>
</div>
<pre class="prettyprint"><p><?=$navi?></p></pre>
<p id='msg'></p>
</div>
</div>
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
