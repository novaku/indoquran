<div class="summernote container">
	<?php
	if ($_POST) {
		?>
		<div class="row">
			<div class="span12">
				<h2 class="bg-primary text-center">Preview Artikel</h2>
				<div class="panel panel-default">
					<div class="panel-body">
						<h2><?php echo $_POST['judul']; ?></h2>
						<ol class="breadcrumb">
							<li><a href="javascript:void(0);">Home</a></li>
							<li class="active"><?php echo $kategori_txt; ?></li>
						</ol>
						<blockquote>
							<footer><?php echo $tgl_tulis; ?>, Oleh : <span class="glyphicon glyphicon-user"></span> <?php echo $_POST['penulis']; ?></footer>
						</blockquote>
						<hr/>
						<?php echo $_POST['content']; ?>
						<hr/>
						<blockquote class="blockquote-reverse">
							<footer>Sumber : <?php echo $_POST['sumber']; ?></footer>
						</blockquote>

					</div>
				</div>
				<div class="alert alert-warning">
					<span class="glyphicon glyphicon-exclamation-sign"></span>
					<strong><?php echo $error; ?>!</strong> Klik pada tombol "Update" untuk mengubah artikel ini, klik pada tombol "Simpan" untuk menyimpan artikel ini.
				</div>
			</div>
		</div>
	<?php
	}
	?>
	<div class="row">
		<form id="postForm" action="<?php echo base_url('artikel/index/tulis'); ?>" method="POST" enctype="multipart/form-data" onsubmit="return postForm()">
			<fieldset>
				<legend><?php echo $_POST ? 'Edit Artikel' : 'Tulis Artikel'; ?></legend>
				<div class="form-group">
					<label for="field-kategori">Kategori</label>
					<input type="hidden" name="artikel_id" value="<?php echo empty($artikel_id) ? '' : $artikel_id; ?>">
					<select class="form-control" id="field-kategori" name="artikel_kategori_id">
						<?php
						$kosong = (($_POST) && empty($_POST['artikel_kategori_id'])) ? ' selected' : '';
						foreach ($kategori as $kat) {
							$selected = $_POST['artikel_kategori_id'] == $kat->id ? ' selected' : '';
							echo '<option value="' . $kat->id . '"' . $selected . '><span class="glyphicon glyphicon-check"></span> ' . $kat->kategori . '</option>';
						}
						if ((empty($_POST['artikel_kategori_id'])) && ($_POST)) {
							$hide          = null;
							$kategori_baru = 'value="' . $_POST['kategori'] . '"';
						} else {
							$hide          = 'style="display: none;"';
							$kategori_baru = null;
						}
						?>
						<option value="" <?php echo $kosong; ?>>Kategori Baru...</option>
					</select>
				</div>
				<div class="form-group has-success has-feedback" id="input-kategori-lain" <?php echo $hide; ?>>
					<label class="control-label" for="field-kategori_lain">Masukkan Kategori Baru</label>
					<input type="text" class="form-control" id="field-kategori_lain" placeholder="Kategori Baru" name="kategori" <?php echo $kategori_baru; ?>>
					<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				</div>
				<div class="form-group">
					<label for="field-sumber">Sumber Tulisan</label>
					<input type="text" class="form-control" id="field-sumber" placeholder='contoh : htttp://www.sumber.net/artikel1 | atau "Buku Sumber"' name="sumber" <?php echo empty($_POST['sumber']) ? '' : 'value="' . $_POST['sumber'] . '"' ?>>
				</div>
				<div class="form-group">
					<label for="field-penulis">Penulis</label>
					<input type="text" class="form-control" id="field-penulis" placeholder='Penulis Artikel Ini' name="penulis" <?php echo empty($_POST['penulis']) ? '' : 'value="' . $_POST['penulis'] . '"' ?>>
				</div>
				<div class="form-group">
					<label for="field-judul">Judul</label>
					<input type="text" class="form-control" id="field-judul" placeholder='Judul Artikel Ini' name="judul" <?php echo empty($_POST['judul']) ? '' : 'value="' . $_POST['judul'] . '"' ?>>
				</div>
				<fieldset>
					<legend>Isi Artikel</legend>
					<textarea class="input-block-level" id="summernote" name="content" rows="18">
						<?php echo empty($_POST['content']) ? '' : $_POST['content']; ?>
					</textarea>
				</fieldset>
				<div style="text-align: center">
					<hr style="width: 200px;"/>
					<button type="submit" class="btn btn-primary btn-lg" id="button-preview">
						<span class="glyphicon glyphicon-file"></span> <?php echo $_POST ? 'Update' : 'Preview'; ?>
					</button>
					<?php echo $_POST ? ' | <a class="btn btn-primary btn-lg" data-toggle="modal" id="button-simpan"><span class="glyphicon glyphicon-floppy-disk"></span> Simpan</a>' : ''; ?>
					<hr style="width: 200px;"/>
				</div>
		</form>
	</div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel">Terima Kasih</h4>
			</div>
			<div class="modal-body">
				Dengan klik tombol "Ok" maka artinya antum sudah selesai edit artikel ini, dan akan disimpan di dalam database artikel kami.<br/>
				Jika klik tombol "Cancel" maka halaman ini akan ditutup dan silakan lanjutkan edit artikelnya.<br/>
				Catatan :
				<ul>
					<li>Artikel antum akan melalui moderasi dari kami dan akan online jika sudah lulus verifikasi moderasi kami.</li>
					<li>Tunggu beberapa waktu untuk tim kami melakukan moderasi artikel antum, 1-3 hari moderasi.</li>
				</ul>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" id="button-redirect-depan">Ok</button>
			</div>
		</div>
	</div>
</div>