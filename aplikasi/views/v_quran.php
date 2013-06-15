<html>
<head>
    <title>AL-Quran Digital Online : Indonesian Translation</title>
	<link rel="icon" href="<?=path_asset('favicon.ico')?>" type="image/x-icon" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Al-Qur'an Digital : Indonesian Translation">
	<meta name="keywords" content="quran digital,al quran digital,al-quran digital,alquran online indonesia,indoquran,al quran digital online,alquran online,quran online indonesia,al quran online indonesia,quran web,alquran digital,al-qur'an digital,al qur'an digital,qur'an web,al quran online,al quran web,al quran,alquran,quran digital online,alquran web,alquran indonesia,web quran,quran online,al quran indonesia,qur'an digital,al qur an digital,al-quran online,alquran online digital,al quran translation,al qur'an,digital online,qur'an online indonesia,al quran bahasa indonesia,koran online indonesia,digital alquran,indonesia translation,quran,stacked pie chart,al-quran digital online,al quran digital indonesia,al qur'an on line,al'quran digital,web.id,al-qur'an online,al quran gratis,al qur`an,on line translator,translate al quran,taksbar,al quran translate,web qur'an,al-quran online indonesia,qur'an translation,al-quran translation,kata bijak dari al quran,aplikasi al-quran,digital alqur'an,al qur'an web,online qur'an,al qur'an digital online,al qur'an online indonesia,alqur'an online,alqur'an web,al qur'an online,alquran on line,qur'an online,alqur an online,filter.gif,qur an online,aplikasi al quran,taskbar,quran.web,quran indonesian translation,alqur'an indonesia,digital quran online,web alquran,al-qur'an online indonesia,indoqur'an,al'quran,ext.panel,online al quran,alkuran digital,quran digital indonesia,translate quran,digitalonline,www.al quran digital.com,alquran digital online,al - quran digital,indo quran,alquran diqital,digital al-quran,digital qur'an,al quran and translation,al-qur'an,qur an digital,digital indonesia,aplikasi alqur'an,right gif,alquran translation,al-quran web,alqur'an digital,al.qur'an,alqur,al quran on line,indonesian translation,al qur,digital al quran,al qur an online,al-quran,al-qur an digital,alquran indonesia online,hbox,bg.gif,program al quran digital,alqur'an,ext.ux.grid.gridfilters,alqur an digital,alqur'an on line,al-qur'an indonesia,quranweb,al-qur'an web,quran indonesia,al">
	<?=extjs_asset_css()?>
	<?=css_asset('quran.css')?>
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
	  var base_url = '<?=base_url()?>';
	  var quran_img = '<?=$this->config->item('quran_img')?>';
	  var quran_mp3 = '<?=$this->config->item('quran_mp3')?>';
	</script>
</head>
<body>
	<div id="loading-mask"></div>
	<div id="loading">
		<span id="loading-message">Sedang Memuat, Mohon Tunggu...</span>
	</div>
	<?=extjs_asset_js()?>
	<div style="display:none;">
		<div id="north-div" align="center">
			<table border="0" width="100%">
				<tr>
					<td><img width="512" height="52" src="assets/images/logo.png" /></td>
					<td align="right">
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
						<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f801bfd4ebb5319"></script>
						<!-- AddThis Button END -->
					</td>					
				</tr>
			</table>
		</div>
    </div>
	<div id="south" class="x-hide-display">
        <p>Selamat datang di indoquran.web.id</p>
    </div>
</body>
</html>