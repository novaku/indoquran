<div class="navbar navbar-fixed-top">
<div class="navbar-inner">
  <div class="container">
	<a href="<?=base_url()?>mobile.nhk" class="brand">Indoquran.Web.Id</a>
	  <ul class="nav">
		<li class="divider-vertical"></li>
		<li id="depan" <?=$page=='depan'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/depan.nhk"><i class="icon-home"></i>Depan</a></li>
		<li id="alquran" <?=$page=='alquran'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/alquran.nhk"><i class="icon-star"></i>Al-Qur'an</a></li>
		<li id="bukutamu" <?=$page=='bukutamu'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/bukutamu.nhk"><i class="icon-book"></i>Buku Tamu</a></li>
		<li class="divider-vertical"></li>
	  </ul>
  </div>
</div>
</div>