<?php
$juz = $this->config->item('juz-data');
$surahJson = file_get_contents('json/getListSurah.json');
$obj = json_decode($surahJson);
?>
<div>
<ul id="alquranTab" class="nav nav-tabs">
  <li class="active"><a href="#pagealquran-cari" data-toggle="tab">Cari</a></li>
  <li><a href="#pagealquran-surah" data-toggle="tab">Surah</a></li>
  <li><a href="#pagealquran-juz" data-toggle="tab">Juz</a></li>
</ul>
<div id="bukutamuTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="pagealquran-cari">
	<fieldset>
	    <legend>Pencarian Tarjamah</legend>
		<div id="alquran-cari">
					<form class="form-inline" role="form" id="formCariTarjamah">
						<div class="input-group">
							<input type="text" class="form-control" name="cariKata" placeholder="Masukkan kata pencarian...">
							<div class="input-group-btn">
								<button type="reset" class="btn btn-default" tabindex="-1" id="resetPencarian">Kosongkan <span class="glyphicon glyphicon-remove"></span></button>
								<button type="submit" class="btn btn-default" tabindex="-1">Cari <span class="glyphicon glyphicon-search"></span></button>
							</div>
						</div>
					</form>
			<div class="panel-group" id="accordionCariQuran">
			</div>
		</div>
	</fieldset>
  </div>
  <div class="tab-pane fade" id="pagealquran-surah">
  <fieldset>
	    <legend>Al-Qur'an Berdasarkan Surah</legend>
		<div id="alquran-surah">
			<div class="panel-group" id="accordionSurahQuran">
			<?php
			$i = 0;
			foreach($obj->rows as $v) {
				if($i!=0) {
				?>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordionSurahQuran" href="#collapseSurah<?=$v->id?>"><?=$v->nama_surah?></a>
						</h4>
					</div>
					<div id="collapseSurah<?=$v->id?>" class="panel-collapse collapse">
						<div class="panel-body">
							<blockquote>
								<font size="6"><?=$v->head?></font><br/><small><?=$v->head_body?></small>
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
	    <legend>Al-Qur'an Berdasarkan Juz</legend>
		<div id="alquran-juz">
			<div class="panel-group" id="accordionJuzQuran">
			<?php
			foreach($juz as $k => $v) {
			?>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordionJuzQuran" href="#collapse<?=$v['id']?>"><?=$v['desc']?></a>
					</div>
					<div id="collapse<?=$v['id']?>" class="panel-collapse collapse">
						<div class="panel-body">
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
<div class="modal fade" id="ayatModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel">Judul</h4>
			</div>
			<div class="modal-body">
				<div id="loadingDiv" style="align:center"><img src="<?=path_asset('images/loading-min.gif')?>" /></div>
			</div>
			<div class="modal-footer">
				<span id="prevBtn"><a class="btn">Prev</a></span>
				<button type="button" class="btn btn-default" data-dismiss="modal">Tutup</button>
				<span id="nextBtn"><a class="btn">Next</a></span>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$("#formCariTarjamah").submit(function (a) {
		a.preventDefault();
		var b = $(this);
		$.ajax({
			type: "POST",
			url: base_url + "mobile/getHasilCari",
			data: b.serialize(),
			success: function (a) {
				var b = $.parseJSON(a);
				if (b.success) {
					var c = '<h3 class="text-center text-success">Ditemukan ' + b.data.jum + ' ayat dalam pencarian kata "' + b.data.cariKata + '"</h3>';
					$("#accordionCariQuran").html(b.msg), $.each(b.data.hasil, function (a, b) {
						var d = "";
						$.each(b.ayatList, function (a, c) {
							d += '<button class="btn" data-toggle="modal" data-target="#ayatModal" onclick="getAyatId(' + c.ID + ",'" + b.surahName + " : " + c.VerseID + "')\">Buka QS. " + b.surahName + ":" + c.VerseID + '</button>&nbsp;';
						}), c += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionCariQuran" href="#collapseCari' + a + '">' + "[" + b.surahId + "] " + b.surahLabel + "</a>" + "</h4></div>" + '<div id="collapseCari' + a + '" class="panel-collapse collapse">' + '<div class="panel-body">' + '<p class="text-info">' + d + "</p>" + "</div>" + "</div>" + "</div>"
					}), $("#accordionCariQuran").html(c)
				} else alert(b.msg)
			}
		})
	});
	$("#resetPencarian").click(function() {
		$("#accordionCariQuran").html('');
	});
</script>