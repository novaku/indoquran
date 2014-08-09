<?php
$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']), 'https') === false ? 'http' : 'https'; // Get protocol HTTP/HTTPS
$host = $_SERVER['HTTP_HOST']; // Get  www.domain.com
$params = $_SERVER['REQUEST_URI']; // Get Parameters occupation=odesk&name=ashik
$currentUrl = $protocol . '://' . $host . $params; // Adding all
?>
<div class="container">
	<div class="panel panel-default">
		<div class="panel-body">
			<p class="lead"><?php echo $isi_artikel->judul; ?></p>
			<ol class="breadcrumb">
				<li><a href="<?php echo base_url('artikel/index'); ?>">Home</a></li>
				<li class="active"><?php echo $isi_artikel->kategori_txt; ?></li>
			</ol>
			<blockquote>
				<footer><?php echo $this->m_artikel->datetime_id_format($isi_artikel->tgl_tulis); ?>, Oleh : <span class="glyphicon glyphicon-user"></span> <?php echo $isi_artikel->penulis; ?></footer>
			</blockquote>
			<hr/>
			<?php echo $isi_artikel->text; ?>
			<hr/>
			<blockquote class="blockquote-reverse">
				<footer>Sumber : <?php echo $isi_artikel->sumber; ?></footer>
			</blockquote>
		</div>
	</div>
	<hr/>
	<div class="fb-like" data-href="<?php echo $currentUrl; ?>" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div><br/>
	<div class="fb-comments" data-href="<?php echo $currentUrl; ?>" data-numposts="5" data-colorscheme="light"></div>
</div>