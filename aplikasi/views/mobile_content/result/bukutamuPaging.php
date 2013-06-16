<?php
	echo $pagination;
	echo '<table class="table table-bordered table-condensed">
		<tr><th>#</th><th>Tanggal / Waktu</th><th>Nama</th></tr>
	';
	$i = $bukutamu->start+1;
	foreach($bukutamu->data as $k=>$v) {
		echo '<tr><td>'.$i.'</td><td>'.$v->tgl.'</td><td><a href="#bukutamuModal" role="button" onclick="getBukutamuId('.$v->id.')" class="btn btn-info" data-toggle="modal">'.$v->name.'</a></td></tr>';
		$i++;
	}
	echo '</table>';
	echo $pagination;
?>
<script src="<?=base_url()?>assets/js/bukutamu.js"></script>