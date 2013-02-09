<?php
class Contoh extends CI_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
		$this->load->model('m_contoh');
    }
    
    public function index()
    {
        // echo $this->m_contoh->paging();
        echo $this->m_contoh->getBukuTamu();
        echo $this->m_contoh->paging();
    }
    
    public function page($pNum=0) {
        //echo $pNum;
        // echo $this->m_contoh->paging();
        echo $this->m_contoh->getBukuTamu($pNum);
        echo $this->m_contoh->paging();
    }
    
	public function test() {
		for($i=1;$i<=12;$i++) {
			if(date("d") > 28) {
				echo date("Y-m",strtotime("-".$i." month -20 day"))."<br>";
			} else {
				echo date("Y-m",strtotime("-".$i." month"))."<br>";
			}
		}
	}
	
	public function getAllAyat() {
		$limit = $this->input->post('limit') == '' ? 10 : $this->input->post('limit');
		$q = "
			SELECT a.ID,a.SuraID,a.VerseID,a.AyahText
			FROM quran_indo a
			LIMIT 0,".$limit;
		
		$qry = $this->db->query($q);

		// return json_encode($qry->result_object());
		foreach ($qry->result_array() as $row)
		{
		   $res[] = array(
				'ID' => $row['ID'],
				'SuraID' => $row['SuraID'],
				'VerseID' => $row['VerseID'],
				'AyahText' => $row['AyahText']
		   );
		}
		echo json_encode($res);
	}
	
	public function getHtml($surahId) {
		$this->m_contoh->getHtml($surahId);
	}
	
	public function getTafsir($id) {
		$q = $this->db->get_where('quran_indo',array('ID'=>$id));
		foreach($q->result() as $row) {
			echo html_entity_decode($row->tafsir);
		}
	}
	
	public function setTarjamah() {
		// $q = $this->db->get_where('quran_indo',array('ID'=>$surahId));
		$q = $this->db->get('quran_indo');
		foreach ($q->result() as $r) {
			$new = html_entity_decode($r->asbabunNuzul);
			// $new = str_replace(array("\r\n","\r","\t"),'',$r->asbabunNuzul);
			$this->db->update('quran_indo',array('asbabunNuzul'=>$new),array('ID'=>$r->ID));
		}
	}
}