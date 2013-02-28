<?php
class M_contoh extends CI_Model {
    var $per_page = 10;
	
	function __construct()
    {
        parent::__construct();
        $config['base_url'] = base_url().'/contoh/page';
        $config['total_rows'] = $this->db->count_all_results('quran_indo');
        $config['per_page'] = $this->per_page;
        $this->pagination->initialize($config);
    }
    
    public function paging() {
        return $this->pagination->create_links()."<br>";
    }
    
    public function getBukuTamu($halaman=null)
    {
		$query = $this->db->get('quran_indo', $this->per_page, $halaman);
        $text = "";
        foreach ($query->result() as $key) {
            $text .= $key->ID.". QS. (";
            $text .= $key->SuraID.":";
            $text .= $key->VerseID."). ";
            $text .= $key->AyahText."<br>";
        }
        return $text;
    }
	
	public function getHtml($surahId=1) {
		ini_set('max_execution_time', 30000); //30000 seconds = 500 minutes
		$q = $this->db->get_where('quran_indo',array('ID'=>$surahId));
		// $q = $this->db->get('quran_indo');
		foreach ($q->result() as $r) {
			// echo html_entity_decode($r->tafsir);
			
			
			$subject = html_entity_decode($r->tafsir);
			$pattern = '/\<td width="40%" valign="top" align="left">                                (.*)                            <\/td>                                                    <\/tr>                    <\/table>/';
			preg_match($pattern, substr($subject,3), $matches, PREG_OFFSET_CAPTURE);
			// print_r($matches);
			
			if(empty($matches)) {
				// $pattern = '/\<td width="100%" valign="top" align="left" >                            (.*)                            <\/td>                                                    <\/tr>/';
				// preg_match($pattern, substr($subject,3), $matches, PREG_OFFSET_CAPTURE);
				$matches[1][0] = "kosong";
			}
			$txt = $matches[1][0];
			// echo $txt;
			
			
			$htmlEncode = htmlentities($txt, ENT_QUOTES);
			$txt = str_replace("  ", "", $htmlEncode);
			$this->db->update('quran_indo',array('AyahPenjelasan'=>$txt),array('ID'=>$r->ID));
			
			
			//echo $subject;
			//$res .= 'QS. '.$r->SuraID.':'.$r->VerseID.' => '.html_entity_decode($r->tafsir).'<hr>';
			
		}
	}
}