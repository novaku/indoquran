<div align="center">
<hr noshade size="1" width="200">
<h1>Link dengan gambar</h1>
<hr noshade size="1" width="200">
<a href="<?=base_url()?>" target="_blank"><?=image_asset('quran.png')?><br/>
Al-Qur'an Digital : Indonesian Translation</a><br>
<div class="eg">
	<?php
	$new = htmlspecialchars('<a href="'.base_url().'" target="_blank" >'.image_asset('quran.png').'<br>Al-Qur\'an Digital : Indonesian Translation</a>', ENT_QUOTES);
	echo $new;
	?>
</div>
<hr noshade size="1" width="200">
<h1>Link hanya text</h1>
<hr noshade size="1" width="200">
<a href="<?=base_url()?>" target="_blank">Al-Qur'an Digital : Indonesian Translation</a><br/>
<div class="eg">
	<?php
	$new = htmlspecialchars('<a href="'.base_url().'" target="_blank" >Al-Qur\'an Digital : Indonesian Translation</a>', ENT_QUOTES);
	echo $new;
	?>
</div>
</div>