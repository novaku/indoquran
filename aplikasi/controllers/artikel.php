<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Artikel extends CI_Controller
{
	function __construct()
	{
		parent::__construct();
		$this->load->model('m_artikel');
		$this->load->library('pagination');
	}

	function index($act = 'depan', $artikel_id = 'all', $page = 1)
	{
		$config['base_url']   = base_url('artikel/index/depan/all');
		$config['total_rows'] = 200;
		$config['per_page']   = 10;
		$this->pagination->initialize($config);
		$data = array (
			'body'           => null,
			'act'            => $act,
			'kategori'       => $this->m_artikel->get_kategori_artikel(),
			'isi_artikel'    => null,
			'daftar_artikel' => null
		);

		switch ($act) {
			case 'depan' :
				$data['body']           = 'artikel_home';
				$data['daftar_artikel'] = $this->m_artikel->getPagination('all', $page);
				break;
			case 'tulis' :
				if ($_POST) {
					$artikel_detail = $this->m_artikel->save_artikel($_POST);
					if ($artikel_detail) {
						$data['error'] = 'Berhasil menyimpan artikel';
					} else {
						$data['error'] = 'Gagal menyimpan artikel';
					}
					$data['artikel_id'] = $artikel_detail['artikel_id'];
					$data['tgl_tulis']  = $this->m_artikel->datetime_id_format($artikel_detail['tgl_tulis']);
					$data['kategori_txt']   = ucwords($artikel_detail['kategori']);
					$data['body'] = 'v_artikel_preview';
				} else {
					$data['body'] = 'v_artikel_tulis_baru';
				}
				break;
			case 'baca' :
				$data['body']        = 'v_artikel_baca';
				$data['isi_artikel'] = $this->m_artikel->get_artikel($artikel_id);
				break;
		}
		$this->load->view('v_artikel', $data);
	}
}