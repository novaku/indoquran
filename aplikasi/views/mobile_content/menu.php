<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
		  <div class="container">
			<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
			  <span class="icon-bar"></span>
			  <span class="icon-bar"></span>
			  <span class="icon-bar"></span>
			</button>
			<a href="<?=base_url()?>mobile.nhk" class="brand"><sup><code>*mobile beta*</code></sup>Indoquran.Web.Id</a>
			<div class="nav-collapse collapse">
			  <ul class="nav">
				<li class="divider-vertical"></li>
				<li id="depan" <?=$page=='depan'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/depan.nhk"><i class="icon-home"></i>Depan</a></li>
				<li id="alquran" <?=$page=='alquran'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/alquran.nhk"><i class="icon-star"></i>Al-Qur'an Digital</a></li>
				<li id="bukutamu" <?=$page=='bukutamu'?'class="active"':''?>><a href="<?=base_url()?>mobile/index/bukutamu.nhk"><i class="icon-book"></i>Buku Tamu</a></li>
			  </ul>
			</div>
		  </div>
		</div>
		</div>