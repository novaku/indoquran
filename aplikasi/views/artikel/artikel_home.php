<?php
echo "daftar artikel :<br>";
foreach ($daftar_artikel as $art) {
	echo '<a href="'.base_url('artikel/index/baca/'.$art->id).'">'.$art->judul . '</a><br/>';
}