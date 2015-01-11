<div>
<ul id="bukutamuTab" class="nav nav-tabs">
  <li class="active"><a href="#pagebukutamu-daftar" data-toggle="tab">Daftar</a></li>
  <li><a href="#pagebukutamu-isi" data-toggle="tab">Isi</a></li>
</ul>
<div id="bukutamuTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="pagebukutamu-daftar">
	    <legend>Daftar Buku Tamu</legend>
		<div id="bukutamu-daftar">
		<?=$bukutamu?>
		</div>
  </div>
	<div class="tab-pane fade in" id="pagebukutamu-isi">
		<legend>Isi Buku Tamu</legend>
		<form class="form-horizontal" id="form-isi-bukutamu" role="form">
			<input type="hidden" name="page" value="bukutamu">
			<input type="hidden" name="act" value="insert">

			<div class="form-group">
				<label for="inputNama" class="col-sm-2 control-label">Nama</label>

				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputNama" placeholder="Masukkan Nama..." name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="inputEmail" class="col-sm-2 control-label">Email</label>

				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputEmail" placeholder="Masukkan Email..." name="email">
				</div>
			</div>
			<div class="form-group">
				<label for="inputKomentar" class="col-sm-2 control-label">Komentar</label>

				<div class="col-sm-10">
					<textarea rows="3" class="form-control" id="inputKomentar" placeholder="Masukkan Komentar..." name="text"></textarea>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="reset" class="btn btn-warning btn-lg">Reset
						<span class="glyphicon glyphicon-refresh"></span></button>
					<button type="submit" class="btn btn-primary btn-lg" onclick='_gaq.push(["_trackEvent", "Mobile: Buku Tamu", "Klik Isi", $("#inputNama").val()+" : "+$("#inputEmail").val()]);'>Kirim
						<span class="glyphicon glyphicon-check"></span></button>
				</div>
			</div>
		</form>
	</div>
</div>
</div>
<script type="text/javascript">
$("#form-isi-bukutamu").submit(function(a){a.preventDefault();var b=$(this);$.ajax({type:"POST",url:base_url+"mobile/loadResult",data:b.serialize(),success:function(a){var c=$.parseJSON(a);c.success?(b.trigger("reset"),alert(c.msg),document.location.reload(!0)):alert(c.msg)}})});
</script>
<div class="modal fade" id="bukutamuModal" tabindex="-1" role="dialog" aria-labelledby="bukutamuModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&cross;</button>
				<h4 class="modal-title" id="bukutamuModalLabel">Modal title</h4>
			</div>
			<div class="modal-body">
				<span id="bukutamuModalBody"></span>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal"><span class="glyphicon glyphicon-off" /> Tutup</button>
			</div>
		</div>
	</div>
</div>