<div class="summernote container">
	<div class="row">
		<h2 class="bg-primary text-center">Tulis Artikel Baru</h2>
		<form id="postForm" action="<?php echo base_url('artikel/index/tulis'); ?>" method="POST" enctype="multipart/form-data" onsubmit="return postForm()">
			<fieldset>
				<legend>Tulis Artikel</legend>
				<div class="form-group">
					<label for="field-kategori">Kategori</label>
					<input type="hidden" name="artikel_id" value="<?php echo empty($artikel_id) ? '' : $artikel_id; ?>">
					<select class="form-control" id="field-kategori" name="artikel_kategori_id">
						<?php
						foreach ($kategori as $kat) {
							echo '<option value="' . $kat->id . '"><span class="glyphicon glyphicon-check"></span> ' . $kat->kategori . '</option>';
						}
						?>
						<option value="">Kategori Baru...</option>
					</select>
				</div>
				<div class="form-group has-success has-feedback" id="input-kategori-lain" style="display: none">
					<label class="control-label" for="field-kategori_lain">Masukkan Kategori Baru</label>
					<input type="text" class="form-control" id="field-kategori_lain" placeholder="Kategori Baru" name="kategori">
					<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				</div>
				<div class="form-group">
					<label for="field-sumber">Sumber Tulisan</label>
					<input type="text" class="form-control" id="field-sumber" placeholder='contoh : htttp://www.sumber.net/artikel1 | atau "Buku Sumber"' name="sumber">
				</div>
				<div class="form-group">
					<label for="field-penulis">Penulis</label>
					<input type="text" class="form-control" id="field-penulis" placeholder='Penulis Artikel Ini' name="penulis">
				</div>
				<div class="form-group">
					<label for="field-judul">Judul</label>
					<input type="text" class="form-control" id="field-judul" placeholder='Judul Artikel Ini' name="judul">
				</div>
				<fieldset>
					<legend>Isi Artikel</legend>
					<textarea class="input-block-level" id="summernote" name="content" rows="18"></textarea>
				</fieldset>
				<div style="text-align: center">
					<hr style="width: 200px;"/>
					<button type="submit" class="btn btn-primary btn-lg" id="button-preview">
						<span class="glyphicon glyphicon-file"></span> Preview
					</button>
					<hr style="width: 200px;"/>
				</div>
		</form>
	</div>
</div>