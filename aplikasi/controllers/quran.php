<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Quran extends CI_Controller {
	var $nama_user_agent = '';

    function __construct() {
        parent::__construct();
        $this->load->model('m_quran');
        // $this->output->enable_profiler(TRUE);
        $this->load->library('user_agent');
        $this->load->library('email');
        $config_mail['mailtype'] = 'html';
        $this->email->initialize($config_mail);
		//tipe agent
        if ($this->agent->is_browser()) {
            $this->nama_user_agent = $this->agent->browser() . ' ' . $this->agent->version();
        } elseif ($this->agent->is_robot()) {
            $this->nama_user_agent = $this->agent->robot();
        } elseif ($this->agent->is_mobile()) {
            $this->nama_user_agent = $this->agent->mobile();
        } else {
            $this->nama_user_agent = $this->agent->agent_string();
        }
    }

    function index() {
		$this->session->set_userdata(array('visitId'=>null));
		//insert data pengunjung
		$clientData = array(
			'VisIP' => $this->input->ip_address(),
			'VisRef' => $this->agent->referrer(),
			'VisUrl' => $_SERVER['REQUEST_URI'],
			'VisDate' => date('Y-m-d H:i:s'),
			'VisAgent' => $this->nama_user_agent,
			'VisPlatform' => $this->agent->platform(),
			'VisAgentString' => $this->agent->agent_string()
		);
		$this->db->insert('logs', $clientData);		
		$this->session->set_userdata(array('visitId'=>$this->db->insert_id()));
        //redirect ke mobile content kalo dari mobile browser
        if ($this->agent->is_mobile()) {
            redirect(base_url() . 'mobile/', 'refresh');
        } else {
            $data = array(
                'kataMutiara' => $this->m_quran->m_kataMutiara()
            );

            $this->load->view('v_quran', $data);
        }
    }

    function displayAyat($id = 1) {
		$this->m_quran->m_setLogActivity();
        echo $this->m_quran->m_displayAyat($id);
    }

    function getAllAyat() {
        echo $this->m_quran->m_getAllAyat();
    }

    function menuQuran() {
        echo $this->m_quran->m_menuQuran();
    }

    function getPengunjung() {
		$page = $this->input->post('page')==''?null:$this->input->post('page');
		$this->m_quran->m_setLogActivity($page);
        echo $this->m_quran->m_getPengunjung();
    }

    function statistik() {
		$tipe = $this->input->post('tipe')==''?'harian':$this->input->post('tipe');
		$this->m_quran->m_setLogActivity($tipe);
        echo $this->m_quran->m_statistik();
    }

    function statistikLast() {
        echo $this->m_quran->m_statistikLast();
    }

    function bukuTamu($act = "insert") {
		$start = $this->input->post('start') == '' ? '' : $this->input->post('start');
		$this->m_quran->m_setLogActivity($start);
        switch ($act) {
            case "insert" : {
                    echo $this->m_quran->m_bukuTamu("insert");
                } break;
            case "read" : {
                    echo $this->m_quran->m_bukuTamu("read");
                } break;
        }
    }

    function randCapcha() {
        echo $this->m_quran->m_randCapcha();
    }

    function getAyatInfo() {
        echo $this->m_quran->m_getAyatInfo();
    }
	
	function getAyatId() {
        echo $this->m_quran->m_getAyatId();
    }

    function viewHosting() {
        $this->load->view('v_hosting');
    }

    function viewAyat($id) {
		$this->m_quran->m_setLogActivity($id);
        $data['display'] = $this->m_quran->m_displayAyat($id);
		$data['judul'] = $this->m_quran->m_getJudulAyat($id);
		$data['tarjamah'] = $this->m_quran->m_getTarjamah($id);
        $nx = $id + 1;
        $pr = $id - 1;
		
		$titleNx = $nx == 6237 ? "" : $this->m_quran->m_getJudulAyat($nx);
		$titlePr = $pr == 0 ? "" : $this->m_quran->m_getJudulAyat($pr);
        $navNx = '<a href="' . base_url() . 'quran/viewAyat/' . $nx . '" title="'.$titleNx.'">' . image_asset('Arrow_right.png') . '</a><br/><sub>'.$titleNx.'</sub>';
        $navPr = '<a href="' . base_url() . 'quran/viewAyat/' . $pr . '" title="'.$titlePr.'">' . image_asset('Arrow_left.png') . '</a><br/><sub>'.$titlePr.'</sub>';

        if ($id == 1) {
            $data['navi'] = $navNx;
        } elseif ($id == 6236) {
            $data['navi'] = $navPr;
        } else {
            $data['navi'] = '<table border="0"><tr><td align="right">'.$navPr.'</td><td>|<br/>|<br/>|<br/>|<br/>|</td><td>' . $navNx.'</td></tr></table>';
        }
        $this->load->view('v_ayat', $data);
    }

    function prakata() {
        $data['jumDownload'] = $this->db->count_all('download_stat');
        $this->load->view('v_prakata', $data);
    }

    function api() {
        $this->load->view('v_api');
    }

    function reff($type='') {
		$data = array('type'=>$type);
        $this->load->view('v_reff',$data);
    }

    function download() {
		$email = $this->input->post('emailField') == '' ? '' : $this->input->post('emailField');
		$this->m_quran->m_setLogActivity($email);
        echo $this->m_quran->m_download();
    }

    function test() {
        $this->load->view('v_test');
    }

    function gads() {
        $this->load->view('v_google_ads');
    }
	
	function getRandomKataMutiara() {
		$query = $this->db->order_by('kataId','random')
			->limit(1)
			->get('katamutiara');
		foreach ($query->result() as $row)
		{
		   echo '<marquee><b>'.$row->text.'</b></marquee>';
		}
	}
	
	function getListSurah() {
		echo $this->m_quran->m_getListSurah();
	}
	
	function getListSurahId() {
		echo $this->m_quran->m_getListSurahId();
	}
	
	function getListAyatId() {
		echo $this->m_quran->m_getListAyatId();
	}
	
	function getListPlatform() {
		echo $this->m_quran->m_getListPlatform();
	}
	
	function autoCompleteSearch() {
		$cari = $this->input->get('query') != '' ? $this->input->get('query') : '';
		$this->m_quran->m_setLogActivity($cari);
		echo $this->m_quran->m_autoCompleteSearch();
	}
}