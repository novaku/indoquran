<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>AL-Quran Digital Online &middot; Indonesian Translation (mobile site)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Al-Qur'an Digital : Indonesian Translation">
    <meta name="author" content="Nova Herdi Kusumah (novaherdi@gmail.com)">
	<link href="<?=base_url()?>assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=base_url()?>assets/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="<?=base_url()?>assets/css/custom.css" rel="stylesheet">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="<?=base_url()?>assets/js/html5shiv.js"></script>
    <![endif]-->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?=base_url()?>assets/ico/144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?=base_url()?>assets/ico/114.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?=base_url()?>assets/ico/72.png">
	<link rel="apple-touch-icon-precomposed" href="<?=base_url()?>assets/ico/57.png">
	<link rel="shortcut icon" href="<?=base_url()?>assets/ico/32.png">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-40015895-1', 'indoquran.web.id');
	  ga('send', 'pageview');
	</script>
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-40015895-1']);
	  _gaq.push(['_setDomainName', 'indoquran.web.id']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
  </head>
  <body>
    <div id="wrap">
      <div id="page-menu">
		<?php $this->load->view('mobile_content/menu'); ?>
	  </div>
	  <div class="container">
		<br>
		<div id="result">
			<?php $this->load->view('mobile_content/result/'.$page); ?>
		</div>
	  </div>
      <div id="push"></div>
    </div>
    <div id="page-footer">
		<?php $this->load->view('mobile_content/footer'); ?>
	</div>
    <script src="<?=base_url()?>assets/js/bootstrap.min.js"></script>
  </body>
</html>