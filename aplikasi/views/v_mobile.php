<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>AL-Quran Digital Online &middot; Indonesian Translation (mobile site)</title>
	<meta http-equiv="Content-Type" content="application/xhtml+xml" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Al-Qur'an Digital : Indonesian Translation">
	<meta name="keywords" content="quran digital,al quran digital,al-quran digital,alquran online indonesia,indoquran,al quran digital online,alquran online,quran online indonesia,al quran online indonesia,quran web,alquran digital,al-qur'an digital,al qur'an digital,qur'an web,al quran online,al quran web,al quran,alquran,quran digital online,alquran web,alquran indonesia,web quran,quran online,al quran indonesia,qur'an digital,al qur an digital,al-quran online,alquran online digital,al quran translation,al qur'an,digital online,qur'an online indonesia,al quran bahasa indonesia,koran online indonesia,digital alquran,indonesia translation,quran,stacked pie chart,al-quran digital online,al quran digital indonesia,al qur'an on line,al'quran digital,web.id,al-qur'an online,al quran gratis,al qur`an,on line translator,translate al quran,taksbar,al quran translate,web qur'an,al-quran online indonesia,qur'an translation,al-quran translation,kata bijak dari al quran,aplikasi al-quran,digital alqur'an,al qur'an web,online qur'an,al qur'an digital online,al qur'an online indonesia,alqur'an online,alqur'an web,al qur'an online,alquran on line,qur'an online,alqur an online,filter.gif,qur an online,aplikasi al quran,taskbar,quran.web,quran indonesian translation,alqur'an indonesia,digital quran online,web alquran,al-qur'an online indonesia,indoqur'an,al'quran,ext.panel,online al quran,alkuran digital,quran digital indonesia,translate quran,digitalonline,www.al quran digital.com,alquran digital online,al - quran digital,indo quran,alquran diqital,digital al-quran,digital qur'an,al quran and translation,al-qur'an,qur an digital,digital indonesia,aplikasi alqur'an,right gif,alquran translation,al-quran web,alqur'an digital,al.qur'an,alqur,al quran on line,indonesian translation,al qur,digital al quran,al qur an online,al-quran,al-qur an digital,alquran indonesia online,hbox,bg.gif,program al quran digital,alqur'an,ext.ux.grid.gridfilters,alqur an digital,alqur'an on line,al-qur'an indonesia,quranweb,al-qur'an web,quran indonesia,al">
    <meta name="author" content="Nova Herdi Kusumah (novaherdi@gmail.com)">
	<link rel="stylesheet" href="<?=path_asset('bootstrap3/css/bootstrap.min.css')?>">
	<link rel="stylesheet" href="<?=path_asset('bootstrap3/css/bootstrap-theme.min.css')?>">
	  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	  <!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	  <![endif]-->
	<style>
		.modal-lg{width:95%;}
	</style>
    <link href="<?=path_asset('css/custom.css')?>" rel="stylesheet">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?=path_asset('ico/144.png')?>">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?=path_asset('ico/114.png')?>">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?=path_asset('ico/72.png')?>">
	<link rel="apple-touch-icon-precomposed" href="<?=path_asset('ico/57.png')?>">
	<link rel="shortcut icon" href="<?=path_asset('ico/32.png')?>">
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
<!--	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>-->
	<script src="<?=path_asset('js/jquery-2.0.1.min.js')?>"></script>
  </head>
  <body>
    <div id="wrap">
      <div id="page-menu">
		<?php $this->load->view('mobile_content/menu'); ?>
	  </div>
	  <div class="container">
		<div id="result">
			<?php $this->load->view('mobile_content/result/'.$page); ?>
		</div>
	  </div>
    </div>
	<?php $this->load->view('mobile_content/footer'); ?>
<!--    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>-->
    <script src="<?=path_asset('bootstrap3/js/bootstrap.min.js')?>"></script>
	<script type="text/javascript">
		var base_url = '<?=base_url()?>';
		$('#loadingDiv').hide();
		$(document).ajaxStart(function() {
			$( "#loadingDiv" ).show();
		});
		$(document).ajaxStop(function() {
			$( "#loadingDiv" ).hide();
		});
		function printSubtopik(id, dest) {
			var destination = "#"+dest+" .sub-topik-content";
			$(destination).html('<img class="img-responsive" src="' + base_url + 'assets/images/loading-min.gif" />');
			$.get(base_url+"mobile/printSubTopik/"+id, function (data, status) {
				$(destination).html(data);
			});
		}
	</script>
	<script src="<?=base_url()?>assets/js/quran-juz.js?v=2"></script>
  </body>
</html>