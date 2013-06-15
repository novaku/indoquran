<div>
<ul id="bukutamuTab" class="nav nav-tabs">
  <li class="active"><a href="#pagebukutamu-daftar" data-toggle="tab">Daftar Buku Tamu</a></li>
  <li><a href="#pagebukutamu-isi" data-toggle="tab">Isi Buku Tamu</a></li>
</ul>
<div id="bukutamuTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="pagebukutamu-daftar">
  <fieldset>
	    <legend>Daftar Buku Tamu</legend>
		<div id="bukutamu-daftar">
		<?=$bukutamu?>
		</div>
	</fieldset>
  </div>
  <div class="tab-pane fade" id="pagebukutamu-isi">
	<form class="form-horizontal" id="form-isi-bukutamu">
	<input type="hidden" name="page" value="bukutamu">
	<input type="hidden" name="act" value="insert">
	<fieldset>
	    <legend>Isi Buku Tamu</legend>
	  <div class="control-group">
		<label class="control-label" for="inputNama">Nama</label>
		<div class="controls">
		  <input type="text" id="inputNama" placeholder="Nama" name="name">
		</div>
	  </div>
	  <div class="control-group">
		<label class="control-label" for="inputEmail">Email</label>
		<div class="controls">
		  <input type="text" id="inputEmail" name="email" placeholder="Email">
		</div>
	  </div>
	  <div class="control-group">
		<label class="control-label" for="inputKomentar">Komentar</label>
		<div class="controls">
			<textarea rows="3" id="inputKomentar" placeholder="Komentar" name="text"></textarea>
		</div>
	  </div>
	  <div class="control-group">
		<div class="controls">
		  <button type="reset" class="btn btn-warning">Reset</button>
		  <button type="submit" class="btn btn-primary">Kirim</button>
		</div>
	  </div>
	  </fieldset>
	</form>
  </div>
</div>
</div>
<div id="bukutamuModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="bukutamuModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
    <h3 id="bukutamuModalLabel">Modal header</h3>
  </div>
  <div class="modal-body">
    <span id="bukutamuModalBody"></span>
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
  </div>
</div>
<script src="<?=base_url()?>assets/js/jquery-2.0.1.min.js"></script>
<script type="text/javascript">
var base_url = '<?=base_url()?>';
$('.pagination ul li a').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$.get(href, function(data) {
		$('#bukutamu-daftar').html(data);
	});
});
function getBukutamuId(id) {
	$.get(base_url+'mobile/getBukuTamuId/'+id, function(data) {
		var obj = $.parseJSON(data);
		var isi = 'Tanggal : '+obj[0].date+'<br/>Email : '+obj[0].email+'<br/>Isi :<br/>'+obj[0].text;
		$('#bukutamuModalLabel').text("Dari : "+obj[0].name);
		$('#bukutamuModalBody').html(isi);
	});
};
$("#form-isi-bukutamu").submit(function(e){
	e.preventDefault();
	var form = $(this);
	$.ajax({
		type: "POST",
		url: base_url+"mobile/loadResult",
		data: form.serialize(),
		success: function(msg){
			var obj = $.parseJSON(msg);
			if(obj.success) {
				form.trigger("reset");
				alert(obj.msg);
				document.location.reload(true);
			} else {
				alert(obj.msg);
			}
		}
	});
});
</script>