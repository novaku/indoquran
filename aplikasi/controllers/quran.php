<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Quran extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        // $this->output->enable_profiler(TRUE);
        $this->load->library('user_agent');
        $this->load->library('email');
        $this->load->model('m_quran');
        $this->load->model('m_mobile');
        $config_mail['mailtype'] = 'html';
        $this->email->initialize($config_mail);
        $this->load->driver('cache');
    }

    function index()
    {
        $this->m_quran->m_insertLogPengunjung();
        //redirect ke mobile content kalo dari mobile browser
        if ($this->agent->is_mobile()) {
            redirect(base_url() . 'mobile/', 'refresh');
        } else {
            // $this->output->cache(60);
            $this->load->view('v_quran');
        }
    }

    function tab($name)
    {
        $data = array(
            'kataMutiara' => $this->m_quran->m_kataMutiara()
        );
        // $this->output->cache(60);
        $this->load->view('tab/' . $name, $data);
    }

    function displayAyat($id = 1)
    {
        echo $this->m_quran->m_displayAyat($id);
    }

    function getAllAyat()
    {
        echo $this->m_quran->m_getAllAyat();
    }

    function menuQuran()
    {
        echo $this->m_quran->m_menuQuran();
    }

    function getPengunjung()
    {
        $page = $this->input->post('page') == '' ? null : $this->input->post('page');
        echo $this->m_quran->m_getPengunjung();
    }

    function statistik()
    {
        $tipe = $this->input->post('tipe') == '' ? 'harian' : $this->input->post('tipe');
        echo $this->m_quran->m_statistik();
    }

    function statistikLast()
    {
        echo $this->m_quran->m_statistikLast();
    }

    function bukuTamu($act = "insert")
    {
        $start = $this->input->post('start') == '' ? '' : $this->input->post('start');
        switch ($act) {
            case "insert" :
            {
                echo $this->m_quran->m_bukuTamu("insert");
            }
                break;
            case "read" :
            {
                echo $this->m_quran->m_bukuTamu("read");
            }
                break;
        }
    }

    function randCapcha()
    {
        echo $this->m_quran->m_randCapcha();
    }

    function getAyatInfo()
    {
        echo $this->m_quran->m_getAyatInfo();
    }

    function getAyatId()
    {
        echo $this->m_quran->m_getAyatId();
    }

    function viewHosting()
    {
        // $this->output->cache(60);
        $this->load->view('v_hosting');
    }

    function viewAyat($id)
    {
        $data['display']     = $this->m_quran->m_displayAyat($id);
        $data['judul']       = $this->m_quran->m_getJudulAyat($id);
        $query               = $this->db->select('img')->from('quran_indo')->where(array('ID' => $id))->get();
        $key                 = $query->row();
        $data['tarjamah']    = $this->m_quran->m_getTarjamah($id);
        $data['quran_image'] = 'http://c00022506.cdn1.cloudfiles.rackspacecloud.com/' . $key->img;
        $nx                  = $id + 1;
        $pr                  = $id - 1;

        $titleNx = $nx == 6237 ? "" : $this->m_quran->m_getJudulAyat($nx);
        $titlePr = $pr == 0 ? "" : $this->m_quran->m_getJudulAyat($pr);
        $navNx   = '<a href="' . base_url() . 'quran/viewAyat/' . $nx . '" title="Ayat Selanjutnya : ' . $titleNx . '" class="btn"><i class="icon-arrow-right"></i> ' . $titleNx . '</a><br/>';
        $navPr   = '<a href="' . base_url() . 'quran/viewAyat/' . $pr . '" title="Ayat Sebelumnya : ' . $titlePr . '" class="btn">' . $titlePr . ' <i class="icon-arrow-left"></i></a><br/>';

        if ($id == 1) {
            $data['navi'] = '<p align="center">' . $navNx . '</p>';
        } elseif ($id == 6236) {
            $data['navi'] = '<p align="center">' . $navPr . '</p>';
        } else {
            $data['navi'] = '<table border="0" align="center" width="100%"><tr><td align="right">' . $navPr . '</td><td>|<br/>|</td><td>' . $navNx . '</td></tr></table>';
        }
        // $this->output->cache(60);
        $this->load->view('v_ayat', $data);
    }

    function prakata()
    {
        $data['jumDownload'] = $this->db->count_all('download_stat');
        // $this->output->cache(60);
        $this->load->view('v_prakata', $data);
    }

    function api()
    {
        // $this->output->cache(60);
        $this->load->view('v_api');
    }

    function reff($type = '')
    {
        $data = array('type' => $type);
        // $this->output->cache(60);
        $this->load->view('v_reff', $data);
    }

    function download()
    {
        $email = $this->input->post('emailField') == '' ? '' : $this->input->post('emailField');
        echo $this->m_quran->m_download();
    }

    function test()
    {
        // $this->output->cache(60);
        $this->load->view('v_test');
    }

    function gads()
    {
        // $this->output->cache(60);
        $this->load->view('v_google_ads');
    }

    function getRandomKataMutiara()
    {
        $query = $this->db->order_by('kataId', 'random')
            ->limit(1)
            ->get('katamutiara');
        foreach ($query->result() as $row) {
            echo '<marquee><b>' . $row->text . '</b></marquee>';
        }
    }

    function getListSurah()
    {
        echo $this->m_quran->m_getListSurah();
    }

    function getListSurahId()
    {
        echo $this->m_quran->m_getListSurahId();
    }

    function getListAyatId()
    {
        echo $this->m_quran->m_getListAyatId();
    }

    function getListPlatform()
    {
        echo $this->m_quran->m_getListPlatform();
    }

    function autoCompleteSearch()
    {
        $cari = $this->input->get('query') != '' ? $this->input->get('query') : '';
        echo $this->m_quran->m_autoCompleteSearch();
    }

    function redisSet()
    {
        $this->load->library('predis');
        for ($i = 1; $i <= 100; $i++) {
            $this->predis->redis->hset("01", "test " . $i, "hasil " . $i);
            echo $i . "<br>";
        }
    }

    function twitterShare($ayatId = 1)
    {
        echo $this->m_quran->m_twitterShare($ayatId);
    }

    function writeAyatFile($type = 'web')
    {
        ini_set('max_execution_time', 30000); //30000 seconds = 500 minutes
        for ($i = 6236; $i >= 1; $i--) {
            if ($type == 'web') {
                $fp      = fopen('viewAyat/' . $i . '.html', 'w');
                $content = $this->m_quran->m_displayAyat($i);
                fwrite($fp, $content);
                fclose($fp);
            } else {
                $fp      = fopen('viewAyatMobile/' . $i . '.html', 'w');
                $content = $this->m_mobile->m_displayAyat($i);
                fwrite($fp, $content);
                fclose($fp);
            }
        }
    }

    function sitemap()
    {
        $data = array('data' => $this->m_quran->m_data_site_map());
        header("Content-Type: text/xml;charset=iso-8859-1");
        $this->load->view("sitemap", $data);
    }

    function jadwalTab()
    {
        $this->load->view("v_jadwal");
    }
}