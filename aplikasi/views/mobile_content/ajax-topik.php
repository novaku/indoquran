<?php
$ci = &get_instance();
$ci->load->model('m_mobile');
?>
Al-Qur'an Berdasarkan Topik<br/>
<p class="text-primary"><strong>[ <?= $topikName ?> ]</strong></p>
<hr>
<div class="panel-group" id="accordion-topik">
	<?php for ($i = 0; $i < count($subTopik['subTopik']); $i++) : ?>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
					<a data-toggle="collapse" data-parent="#accordion-topik" href="#collapse-<?= $subTopik['subTopik'][$i]['id'] ?>">
						<?= $subTopik['subTopik'][$i]['hasSubtopik'] ? $subTopik['subTopik'][$i]['text'].' <sup>[sub-topik]</sup>' : $subTopik['subTopik'][$i]['text'] ?>
					</a>
				</h4>
			</div>
			<div id="collapse-<?= $subTopik['subTopik'][$i]['id'] ?>" class="panel-collapse collapse">
				<div class="panel-body">
					<?php
					if ($subTopik['subTopik'][$i]['hasSubtopik'] > 0) {
						$ci->m_mobile->printSubTopik($subTopik['subTopik'][$i]['id']);
					} else {
						$id  = $subTopik['subTopik'][$i]['id'];
						$sub = $ci->m_mobile->getTopikContent($id);
						foreach ($sub as $k) {
							$info = $ci->m_mobile->getAyatInfoMobile($k);
							echo '<button class="btn" data-toggle="modal" data-target="#ayatModal" onclick="getAyatId(' . $info['quranId'] . ',\'' . mysql_real_escape_string($info['surah']) . ' : ' . $info['ayatId'] . '\')">Buka QS. ' . $info['surah'] . ':' . $info['ayatId'] . '<i class="icon-ok-circle"></i></button>&nbsp;';
						}
					}
					?>

				</div>
			</div>
		</div>
	<?php endfor; ?>
</div>