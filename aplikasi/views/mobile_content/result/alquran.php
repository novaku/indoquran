<?php
$juz = array(
	array(
		'id' => 1,
		'start' => 'Juz-1',
		'desc' => 'Juz - 1 (Al-Fatihah:1 - Al-Baqarah:141)'
	),
	array(
		'id' => 2,
		'start' => 'Juz-2',
		'desc' => 'Juz - 2 (Al-Baqarah:142 - Al-Baqarah:252)'
	),
	array(
		'id' => 3,
		'start' => 'Juz-3',
		'desc' => 'Juz - 3 (Al-Baqarah:253 - Ali \'Imran:91)'
	),
	array(
		'id' => 4,
		'start' => 'Juz-4',
		'desc' => 'Juz - 4 (Ali \'Imran:92 - An-Nisa\':23)'
	),
	array(
		'id' => 5,
		'start' => 'Juz-5',
		'desc' => 'Juz - 5 (An-Nisa\':24 - An-Nisa\':147)'
	),
	array(
		'id' => 6,
		'start' => 'Juz-6',
		'desc' => 'Juz - 6 (An-Nisa\':148 - Al-Ma\'idah:82)'
	),
	array(
		'id' => 7,
		'start' => 'Juz-7',
		'desc' => 'Juz - 7 (Al-Ma\'idah:83 - Al-An\'am:10)'
	),
	array(
		'id' => 8,
		'start' => 'Juz-8',
		'desc' => 'Juz - 8 (Al-An\'am:11 - Al-A\'raf:87)'
	),
	array(
		'id' => 9,
		'start' => 'Juz-9',
		'desc' => 'Juz - 9 (Al-A\'raf:88 - Al-Anfal:40)'
	),
	array(
		'id' => 10,
		'start' => 'Juz-10',
		'desc' => 'Juz - 10 (Al-Anfal:41 - At-Taubah:93)'
	),
	array(
		'id' => 11,
		'start' => 'Juz-11',
		'desc' => 'Juz - 11 (At-Taubah:94 - Hud:5)'
	),
	array(
		'id' => 12,
		'start' => 'Juz-12',
		'desc' => 'Juz - 12 (Hud:6 - Yusuf:52)'
	),
	array(
		'id' => 13,
		'start' => 'Juz-13',
		'desc' => 'Juz - 13 (Yusuf:53 - Al-Hijr:1)'
	),
	array(
		'id' => 14,
		'start' => 'Juz-14',
		'desc' => 'Juz - 14 (Al-Hijr:2 - An Nahl:128)'
	),
	array(
		'id' => 15,
		'start' => 'Juz-15',
		'desc' => 'Juz - 15 (Al-Isra\':1 - Al-Kahf:74)'
	),
	array(
		'id' => 16,
		'start' => 'Juz-16',
		'desc' => 'Juz - 16 (Al-Kahf:75 - Ta Ha:135)'
	),
	array(
		'id' => 17,
		'start' => 'Juz-17',
		'desc' => 'Juz - 17 (Al-Anbiya:1 - Al Hajj:78)'
	),
	array(
		'id' => 18,
		'start' => 'Juz-18',
		'desc' => 'Juz - 18 (Al-Mu\'minun:1 - Al-Furqan:20)'
	),
	array(
		'id' => 19,
		'start' => 'Juz-19',
		'desc' => 'Juz - 19 (Al-Furqan:21 - An-Naml:59)'
	),
	array(
		'id' => 20,
		'start' => 'Juz-20',
		'desc' => 'Juz - 20 (An-Naml:60 - Al-\'Ankabut:44)'
	),
	array(
		'id' => 21,
		'start' => 'Juz-21',
		'desc' => 'Juz - 21 (Al-\'Ankabut:45 - Al-Ahzab:30)'
	),
	array(
		'id' => 22,
		'start' => 'Juz-22',
		'desc' => 'Juz - 22 (Al-Ahzab:31 - Ya Sin:21)'
	),
	array(
		'id' => 23,
		'start' => 'Juz-23',
		'desc' => 'Juz - 23 (Ya Sin:22 - Az-Zumar:31)'
	),
	array(
		'id' => 24,
		'start' => 'Juz-24',
		'desc' => 'Juz - 24 (Az-Zumar:32 - Fussilat:46)'
	),
	array(
		'id' => 25,
		'start' => 'Juz-25',
		'desc' => 'Juz - 25 (Fussilat:47 - Al-Jasiyah:37)'
	),
	array(
		'id' => 26,
		'start' => 'Juz-26',
		'desc' => 'Juz - 26 (Al-Ahqaf:1 - Az-Zariyat:30)'
	),
	array(
		'id' => 27,
		'start' => 'Juz-27',
		'desc' => 'Juz - 27 (Az-Zariyat:31 - Al-Had"id":29)'
	),
	array(
		'id' => 28,
		'start' => 'Juz-28',
		'desc' => 'Juz - 28 (Al-Mujadilah:1 - At-Tahrim:12)'
	),
	array(
		'id' => 29,
		'start' => 'Juz-29',
		'desc' => 'Juz - 29 (Al-Mulk:1 - Al-Mursalat:50)'
	),
	array(
		'id' => 30,
		'start' => 'Juz-30',
		'desc' => 'Juz - 30 (An-Naba\':1 - An-Nas:6)'
	),
);

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
    <h3 id="myModalLabel">Modal header</h3>
  </div>
  <div class="modal-body">
    <p>One fine body…</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Tutup</button>
  </div>
</div>
<script src="assets/js/quran-juz.js"></script>