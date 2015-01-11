<?php if ( ! defined( 'BASEPATH' ) ) {
	exit( 'No direct script access allowed' );
}

class Mobile extends CI_Controller {
	function __construct() {
		parent::__construct();
		$this->load->model( 'm_mobile' );
		$this->load->library( 'email' );
		$this->load->library( 'recaptcha' );
		$this->load->helper( 'email' );
		$this->load->helper( 'misc' );
		$this->load->driver( 'cache' );
		$this->load->helper( 'html' );
	}

	function index( $page = 'depan' ) {
		//echo '<a href="tel:+6285720211699">TELEPON</a>';
		// echo "Mobile version untuk website ini masih dalam tahap pengembangan, harap kunjungi aplikasi website ini dengan menggunakan browser PC";
		$data['page'] = $page;
		if ( $page == 'bukutamu' ) {
			$act = $this->input->post( 'act' ) == '' ? 'read' : $this->input->post( 'act' );
			if ( $act == 'insert' ) {
				echo $this->m_mobile->m_bukuTamu( 'insert' );
			} else {
				ob_start();
				$this->bukutamuPaging( 1 );
				$out = ob_get_contents();
				ob_end_clean();
				$data['bukutamu'] = $out;
			}
		} elseif ( $page == 'alquran' ) {
			$data['mainTopik'] = $this->m_mobile->getMainTitleTopik();
		}
		$this->load->view( 'v_mobile', $data );
	}

	function loadResult() {
		$page = $this->input->post( 'page' ) == '' ? '' : $this->input->post( 'page' );
		$act  = $this->input->post( 'act' ) == '' ? 'read' : $this->input->post( 'act' );
		$data = null;
		if ( $page == 'bukutamu' ) {
			if ( $act == 'insert' ) {
				$secret = "6LevZvsSAAAAACRurQ9P6CXyJydGhTapFLeBaXrs";
				$lang = "id";
				// The response from reCAPTCHA
				$resp = null;
				// The error code from reCAPTCHA, if any
				$error = null;
				$reCaptcha = $this->recaptcha->ReCaptcha($secret);
				if ($_POST["g-recaptcha-response"]) {
					$resp = $this->recaptcha->verifyResponse(
						$_SERVER["REMOTE_ADDR"],
						$_POST["g-recaptcha-response"]
					);
					if ($resp != null && $resp->success) {
						echo $this->m_mobile->m_bukuTamu('insert');
					} else {
						echo "Harap isi reCAPTCHA dengan benar!";
					}
				}
			} else {
				ob_start();
				$this->bukutamuPaging( 1 );
				$out = ob_get_contents();
				ob_end_clean();
				$data['bukutamu'] = $out;
			}
		}
		if ( $act != 'insert' ) {
			$this->load->view( 'mobile_content/result/'.$page, $data );
		}
	}

	function bukutamuPaging( $p = 1 ) {
		$data['bukutamu'] = json_decode( $this->m_mobile->m_bukuTamu( 'read', $p ) );
		$this->load->library( 'pagination' );
		$config['total_rows'] = $data['bukutamu']->jum;
		$this->pagination->initialize( $config );
		$data['pagination'] = $this->pagination->create_links();
		$data['pageNo']     = $p;
		$this->load->view( 'mobile_content/result/bukutamuPaging', $data );
	}

	function getBukuTamuId( $id = 1 ) {
		echo $this->m_mobile->m_getBukuTamuId( $id );
	}

	function loadPageAttrib( $attribute ) {
		$this->load->view( 'mobile_content/'.$attribute );
	}

	function getAllAyat() {
		echo $this->m_mobile->m_getAllAyat();
	}

	function displayAyat( $id ) {
		echo $this->m_mobile->m_displayAyatCache( $id );
	}

	function mp3player( $id ) {
		$data = $this->m_mobile->getAyatInfo( $id );
		$arr  = array (
			'mp3_file' => $data['mp3'],
			'mp3_info' => $data['nama_surah'].':'.$data['VerseID'] );
		$this->load->view( 'v_mp3_player', $arr );
	}

	function getJumAyat( $id = 1 ) {
		echo $this->m_mobile->m_getJumAyat( $id );
	}

	function getAyatInfo( $id = 1 ) {
		echo $this->m_mobile->m_getAyatInfo( $id );
	}

	function getHasilCari() {
		echo $this->m_mobile->m_getHasilCari();
	}

	function ajax( $action = "getTopik", $id = null ) {
		if ( $action == 'getTopik' ) {
			if ( ! is_null( $id ) ) {
				$data = $this->m_mobile->getTopikGroup( $id );
				$this->load->view( 'mobile_content/ajax-topik', $data );
			}
		}
	}

	function printSubTopik( $id = null ) {
		if ( ! is_null( $id ) ) {
			$this->m_mobile->printSubTopik( $id );
		}
	}
}