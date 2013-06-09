<?php
$juz = $this->config->item('juz-data');
?>
<div class="accordion" id="accordionJuzQuran">
<?php
foreach($juz as $k => $v) {
?>
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion<?=$v['id']?>" href="#collapse<?=$v['id']?>">
			<?=$v['start']?>
			</a>
		</div>
		<div id="collapse<?=$v['id']?>" class="accordion-body collapse">
			<div class="accordion-inner">
			<p class="text-info"><?=$v['desc']?></p>
			</div>
		</div>
	</div>
<?php
}
?>
</div>
<!-- Modal -->
<div id="ayatModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Judul</h3>
  </div>
  <div class="modal-body">
    <p>-</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Tutup</button>
  </div>
</div>

<script type="text/javascript">
function getAyatId(id,judul) {
	$("#myModalLabel").html(judul);
	$.get('mobile/displayAyat/'+id, function(data) {
		$("#ayatModal .modal-body").html(data);
	});
}
<?php
foreach($juz as $k => $v) {
?>
$('#collapse<?=$v['id']?>').on('show', function () {
	var elm = $('#collapse<?=$v['id']?> .accordion-inner');
	elm.append('<br>');
	$.get("json/juz<?=$v['id']?>.json",
	function(data){
		var i=1;
		$.each(data, function(key, val) {
			elm.append('<a href="#ayatModal" role="button" class="btn" data-toggle="modal" onclick="getAyatId('+val.ID+',\''+val.surah+' ayat '+val.VerseID+'\')">Buka QS. '+val.surah+':'+val.VerseID+'</a>');
			i++;
		});
	}, "json");
});
<?php
}
?>
</script>