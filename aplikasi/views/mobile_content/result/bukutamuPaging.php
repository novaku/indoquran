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
<script type="text/javascript">
$('.pagination ul li a').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$.get(href, function(data) {
		$('#bukutamu-daftar').html(data);
	});
});
function getBukutamuId(id) {
	$.get('mobile/getBukuTamuId/'+id, function(data) {
		var obj = $.parseJSON(data);
		$('#bukutamuModalLabel').text("Dari : "+obj[0].name);
		$('#bukutamuModalBody').html("Tanggal : "+obj[0].date+"<br/>Email : "+obj[0].email+"<br/>Isi :<br/>"+obj[0].text);
	});
}
</script>