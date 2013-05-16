<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
  xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
	<meta charset="utf-8">
	<title><?=$judul?></title>
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
	<p align="center"><a name="fbshare" onclick='postToFeed(); return false;' style="cursor:pointer"><?=image_asset('fb_share.png')?></a></p>
	<center><?=$navi?></center>
</div>
<div id='fb-root'></div>
<script src='http://connect.facebook.net/en_US/all.js'></script>
<p id='msg'></p>

<script> 
  FB.init({appId: "462282400477128", status: true, cookie: true});

  function postToFeed() {

	// calling the API ...
	var obj = {
	  method: 'feed',
	  redirect_uri: '<?=base_url()?>quran/viewAyat/<?=$this->uri->segment(3)?>',
	  link: '<?=base_url()?>quran/viewAyat/<?=$this->uri->segment(3)?>',
	  picture: '<?=base_url().'assets/images/quran.png'?>',
	  name: 'Isi Ayat Al-Qur\'an',
	  caption: '<?=$judul?>',
	  description: '<?=$tarjamah?>'
	};

	function callback(response) {
	  document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
	}

	FB.ui(obj, callback);
  }

</script>
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