<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
	<meta property="fb:app_id" content="462282400477128"/>
<!--	<meta property="og:title" content="Workday Sets Price Range for I.P.O." />-->
<!--	<meta property="og:site_name" content="My Favorite News"/>-->
<!--	<meta property="og:url" content="http://www.myfavnews.com/2013/1/1/workday-price-range" />-->
<!--	<meta property="og:type" content="article" />-->
<!--	<meta property="og:locale" content="id_ID" />-->
<!--	<meta property="article:author" content="https://www.facebook.com/fareedzakaria" />-->
<!--	<meta property="article:publisher" content="https://www.facebook.com/cnn" />-->

	<title>Artikel</title>
	<!-- include libries(jQuery, bootstrap, fontawesome) -->
	<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<!-- include (codemirror.css, codemirror.js, xml.js, formatting.js) -->
	<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.min.css"/>
	<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/theme/monokai.min.css">
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.min.js"></script>
	<!-- include summernote css/js-->
	<?php echo css_asset('summernote.css'); ?>
	<?php echo css_asset('page-min.css'); ?>
	<?php echo js_asset('summernote.min.js'); ?>
	<style>
		body {
			padding-top: 70px;
		}
	</style>
	<script type="application/javascript">
		var base_url = "<?php echo base_url(); ?>";
	</script>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=462282400477128&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
<script>(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=462282400477128&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Navigasi</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<?php echo $act == 'baca' ? '<span class="icon-bar"></span>' : ''; ?>
			</button>
			<a class="navbar-brand" href="javascript:void(0)">Artikel</a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<?php echo $act == 'depan' ? '<li class="active"><p class="navbar-text"><span class="glyphicon glyphicon-home"></span> Depan</p></li>' : '<li><a href="'.base_url('artikel/index').'"><span class="glyphicon glyphicon-home"></span> Depan</a></li>'; ?>
				<?php
				if($act == 'baca') {
					echo '<li class="active">
						<p class="navbar-text"><span class="glyphicon glyphicon-book"></span> Baca Artikel</p>
					</li>';
				}
				?>
				<?php echo $act == 'tulis' ? '<li class="active"><p class="navbar-text"><span class="glyphicon glyphicon-pencil"></span> Tulis Artikel</a></li>' : '<li><a href="'.base_url('artikel/index/tulis').'"><span class="glyphicon glyphicon-pencil"></span> Tulis Artikel</a></li>'; ?>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
	<!-- /.container-fluid -->
</nav>
<div id='body_content'><?php $this->load->view('artikel/' . $body); ?></div>
<?php echo js_asset('artikel.js'); ?>
</body>
</html>