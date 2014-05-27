<?php

class M_artikel extends CI_Model
{
	function get_kategori_artikel()
	{
		$query = $this->db->order_by('kategori')->get_where('artikel_kategori', array ('aktif' => 'Y'));
		return $query->result();
	}

	function get_artikel($id)
	{
		$query = $this->db->get_where('artikel', array ('id' => $id));
		return $query->row();
	}

	function getPagination($category = 'all', $page = 1, $perpage = 10)
	{
		$offset = $page == 1 ? 0 : (($page - 1) * $perpage) - 1;
		$filter = $category == 'all' ? array ('aktif' => 'Y') : array (
			'aktif'               => 'Y',
			'artikel_kategori_id' => $category
		);
		$query  = $this->db
			->order_by('tgl_aktif', 'desc')
			->limit($perpage, $offset)
			->get_where('artikel', $filter);
		return $query->result();
	}

	function save_artikel($post)
	{
		$return_array = array ();
		if ((empty($post['artikel_kategori_id'])) && (!empty($post['kategori']))) {
			$kategori_id = $this->cek_kategori_lain($post['kategori']);
			if (is_null($kategori_id)) {
				$this->db->insert('artikel_kategori', array ('kategori' => $post['kategori']));
				$post['artikel_kategori_id'] = $this->db->insert_id();
			} else {
				$post['artikel_kategori_id'] = $kategori_id;
			}
		}
		$data = array (
			'artikel_kategori_id' => $post['artikel_kategori_id'],
			'sumber'              => $post['sumber'],
			'penulis'             => $post['penulis'],
			'judul'               => $post['judul'],
			'text'                => trim($post['content'])
		);
		if (empty($post['artikel_id'])) {
			if ($this->db->insert('artikel', $data)) {
				$post['artikel_id'] = $this->db->insert_id();
				$artikel_detail     = $this->get_artikel_detail($post['artikel_id']);
				$return_array       = array (
					'artikel_id' => $post['artikel_id'],
					'tgl_tulis'  => $artikel_detail->tgl_tulis,
					'kategori'   => $artikel_detail->kategori
				);
			}
			return $return_array;
		} else {
			if ($this->db->update('artikel', $data, array ('id' => $post['artikel_id']))) {
				$artikel_detail = $this->get_artikel_detail($post['artikel_id']);
				$return_array   = array (
					'artikel_id' => $post['artikel_id'],
					'tgl_tulis'  => $artikel_detail->tgl_tulis,
					'kategori'   => $artikel_detail->kategori
				);
			}
			return $return_array;
		}
	}

	private function cek_kategori_lain($kategori)
	{
		$kategori = strtolower(str_replace(' ', '', $kategori));
		$query    = $this->db
			->select("id")
			->from('artikel_kategori')
			->where("LOWER(REPLACE(kategori, ' ', '')) = '" . $kategori . "'", null, false)
			->get();
		if ($query->num_rows() > 0) {
			foreach ($query->result() as $row) {
				return $row->id;
			}
		} else {
			return null;
		}
	}

	private function get_artikel_detail($artikel_id = null)
	{
		$query = $this->db
			->select('a.id,a.tgl_tulis,b.kategori')
			->from('artikel a')
			->join('artikel_kategori b', 'b.id=a.artikel_kategori_id')
			->where('a.id', $artikel_id)
			->get();
		return $query->result()[0];
	}

	function datetime_id_format($datetime = null)
	{
		return date('d/m/Y H:i:s', strtotime($datetime));
	}

}