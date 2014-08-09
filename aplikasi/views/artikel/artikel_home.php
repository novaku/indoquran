<div class="container">
	<h1>Daftar Artikel</h1>
	<table class="table table-condensed table-striped">
		<thead>
		<tr>
			<th>#</th>
			<th>Penulis</th>
			<th>Kategori</th>
			<th>Judul</th>
		</tr>
		</thead>
		<tbody>
		<?php
		$i = 1;
		foreach ($daftar_artikel as $artikel) :
			?>
			<tr>
				<td><?php echo $i; ?>.</td>
				<td><?php echo $artikel->penulis ?></td>
				<td><?php echo $artikel->kategori ?></td>
				<td>
					<a href="<?php echo base_url('artikel/index/baca/' . $artikel->id) ?>"><?php echo $artikel->judul ?></a>
				</td>
			</tr>
			<?php
			$i++;
		endforeach;
		?>
		</tbody>
	</table>
	<hr/>
	<?php
	echo $this->pagination->create_links();
	?>
</div>