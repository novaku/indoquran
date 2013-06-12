<?php
$juz = $this->config->item('juz-data');
$surahJson = file_get_contents('json/getListSurah.json');
$obj = json_decode($surahJson);
?>
<div>
<ul id="alquranTab" class="nav nav-tabs">
  <li class="active"><a href="#pagealquran-surah" data-toggle="tab">Al-Qur'an Berdasarkan Surah</a></li>
  <li><a href="#pagealquran-juz" data-toggle="tab">Alquran Berdasarkan Juz</a></li>
</ul>
<div id="bukutamuTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="pagealquran-surah">
  <fieldset>
	    <legend>Al-Qur'an Berdasarkan Surah</legend>
		<div id="alquran-surah">
			<?php
			$i = 0;
			foreach($obj->rows as $v) {
				if($i!=0) {
				?>
				<div class="accordion-group">
					<div class="accordion-heading">
						<a class="accordion-toggle" data-toggle="collapse" data-parent="#surah<?=$v->id?>" href="#collapseSurah<?=$v->id?>">
						<?=$v->nama_surah?>
						</a>
					</div>
					<div id="collapseSurah<?=$v->id?>" class="accordion-body collapse">
						<div class="accordion-inner">
						<blockquote>
						  <small><?=$v->head_body?></small>
						</blockquote>
						</div>
					</div>
				</div>
			<?php
				}
				$i++;
			}
			?>
		</div>
	</fieldset>
  </div>
  <div class="tab-pane fade" id="pagealquran-juz">
	<fieldset>
	    <legend>Alquran Berdasarkan Juz</legend>
		<div id="alquran-juz">
			<div class="accordion" id="accordionJuzQuran">
			<?php
			foreach($juz as $k => $v) {
			?>
				<div class="accordion-group">
					<div class="accordion-heading">
						<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion<?=$v['id']?>" href="#collapse<?=$v['id']?>">
						<?=$v['desc']?>
						</a>
					</div>
					<div id="collapse<?=$v['id']?>" class="accordion-body collapse">
						<div class="accordion-inner">
						<p class="text-info"></p>
						</div>
					</div>
				</div>
			<?php
			}
			?>
			</div>
		</div>
	</fieldset>
  </div>
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
<!--<script src="<?=base_url()?>assets/js/quran-juz.js"></script>-->
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
	$.get("json/juz<?=$v['id']?>.json",
	function(data){
		var i=1;
		$.each(data, function(key, val) {
			elm.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId('+val.ID+',\''+val.surah+' ayat '+val.VerseID+'\')">Buka QS. '+val.surah+':'+val.VerseID+'</a>');
			i++;
		});
	}, "json");
});
<?php
}
for($i=1;$i<=114;$i++) {
?>
$('#collapseSurah<?=$i?>').on('show', function () {
	var elm = $('#collapseSurah<?=$i?> .accordion-inner');
	$.get("mobile/getJumAyat/<?=$i?>",
	function(data){
		var i=1;
		$.each(data, function(key, val) {
			elm.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId('+val.ID+',\''+val.surah+' ayat '+val.VerseID+'\')">Buka QS. '+val.surah+':'+val.VerseID+'</a>');
			i++;
		});
	}, "json");
});
<?php
}
?>
</script>