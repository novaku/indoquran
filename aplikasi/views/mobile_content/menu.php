<nav class="navbar navbar-default navbar-fixed-top" role="navigation" xmlns="http://www.w3.org/1999/html">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-indoquran">
			<span class="sr-only">Navigasi</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a href="<?=base_url()?>mobile.nhk" class="navbar-brand">Indoquran.Web.Id</a>
	</div>
	<div class="collapse navbar-collapse" id="navbar-collapse-indoquran">
		<ul class="nav navbar-nav">
			<li class="nav-divider"></li>
			<li id="depan" <?=$page=='depan'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/depan.nhk"><span class="glyphicon glyphicon-home"></span> Depan</a></li>
			<li id="alquran" <?=$page=='alquran'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/alquran.nhk"><span class="glyphicon glyphicon-star"></span> Al-Qur'an</a></li>
			<li id="bukutamu" <?=$page=='bukutamu'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/bukutamu.nhk"><span class="glyphicon glyphicon-comment"></span> Buku Tamu</a></li>
		</ul>
	</div>
</nav>