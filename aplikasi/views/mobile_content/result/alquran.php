<?php
$juz = $this->config->item('juz-data');
$surahJson = file_get_contents('json/getListSurah.json');
$obj = json_decode($surahJson);
?>
<div>
<ul id="alquranTab" class="nav nav-tabs">
  <li class="active"><a href="#pagealquran-cari" data-toggle="tab">Pencarian Tarjamah</a></li>
  <li><a href="#pagealquran-surah" data-toggle="tab">Al-Qur'an Berdasarkan Surah</a></li>
  <li><a href="#pagealquran-juz" data-toggle="tab">Alquran Berdasarkan Juz</a></li>
</ul>
<div id="bukutamuTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="pagealquran-cari">
	<fieldset>
	    <legend>Pencarian Tarjamah</legend>
		<div id="alquran-cari">
			<form id="formCariTarjamah">
				<div class="input-prepend input-append">
				  <button class="btn" type="reset">Reset <i class="icon-refresh"></i></button>
				  <input class="span9" id="appendedInputButton" type="text" name="cariKata" placeholder="Masukkan kata pencarian..">
				  <button class="btn" type="submit">Cari <i class="icon-search"></i></button>
				</div>
			</form>
			<div class="accordion" id="accordionCariQuran">
				
			</div>
		</div>
	</fieldset>
  </div>
  <div class="tab-pane fade" id="pagealquran-surah">
  <fieldset>
	    <legend>Al-Qur'an Berdasarkan Surah</legend>
		<div id="alquran-surah">
			<div class="accordion" id="accordionSurahQuran">
			<?php
			$i = 0;
			foreach($obj->rows as $v) {
				if($i!=0) {
				?>
				<div class="accordion-group">
					<div class="accordion-heading">
						<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordionSurahQuran" href="#collapseSurah<?=$v->id?>">
						<?=$v->nama_surah?>
						</a>
					</div>
					<div id="collapseSurah<?=$v->id?>" class="accordion-body collapse">
						<div class="accordion-inner">
						<blockquote>
						  <small><?=$v->head_body?></small>
						</blockquote>
						<div id="contentSurah<?=$v->id?>"></div>
						</div>
					</div>
				</div>
			<?php
				}
				$i++;
			}
			?>
			</div>
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
						<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordionJuzQuran" href="#collapse<?=$v['id']?>">
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
    <div id="loadingDiv" style="align:center"><img src="<?=base_url()?>assets/images/loading-min.gif" /></div>
  </div>
  <div class="modal-footer">
	<span id="prevBtn"><a class="btn btn-info">Prev</a></span>
	<a class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Tutup</a>
	<span id="nextBtn"><a class="btn btn-info">Next</a></span>
  </div>
</div>
<script type="text/javascript">
$("#formCariTarjamah").submit(function(a){a.preventDefault();var b=$(this);$.ajax({type:"POST",url:base_url+"mobile/getHasilCari",data:b.serialize(),success:function(a){var b=$.parseJSON(a);if(b.success){var c='<p class="text-center text-success">Ditemukan '+b.data.jum+' ayat dalam pencarian kata "'+b.data.cariKata+'"</p>';$("#accordionCariQuran").html(b.msg),$.each(b.data.hasil,function(a,b){var d="";$.each(b.ayatList,function(a,c){d+='<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId('+c.ID+",'"+b.surahName+" : "+c.VerseID+"')\">Buka QS. "+b.surahName+":"+c.VerseID+'<i class="icon-ok-circle"></i></a>'}),c+='<div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordionCariQuran" href="#collapseCari'+a+'">'+"["+b.surahId+"] "+b.surahLabel+"</a>"+"</div>"+'<div id="collapseCari'+a+'" class="accordion-body collapse">'+'<div class="accordion-inner">'+'<p class="text-info">'+d+"</p>"+"</div>"+"</div>"+"</div>"}),$("#accordionCariQuran").html(c)}else alert(b.msg)}})});
</script>