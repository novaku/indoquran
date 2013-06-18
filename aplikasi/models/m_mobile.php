<?php

class M_mobile extends CI_Model {
	function getAyatInfo($id) {
		$q = $this->db->select('a.VerseID,a.mp3,b.nama as nama_surah')->from('quran_indo a')->join('surah b','a.SuraID=b.id')->where('a.ID',$id)->get()->row_array();
		return $q;
	}

    function m_bukuTamu($act='read',$p=1) {
        $name = $this->input->post('name') == '' ? '' : $this->input->post('name');
        $email = $this->input->post('email') == '' ? '' : $this->input->post('email');
        $text = $this->input->post('text') == '' ? '' : $this->input->post('text');
        $newText = preg_replace('/[^[:print:]]/', '', $this->input->post('text'));
        $newText = htmlspecialchars($newText, ENT_QUOTES);
		
        $limit = 10;
		$start = $p==1 ? 0 : ($p-1) * $limit;
		
        $dir = $this->input->post('dir') == '' ? 'DESC' : $this->input->post('dir');
        $sort = $this->input->post('sort') == '' ? 'date' : $this->input->post('sort');
		$arr = array();

        switch ($act) {
            case "insert" :
				if (valid_email($email)) {
					$this->email->from($email, $name);
					$this->email->to('kontak@indoquran.web.id');
					$this->email->cc($email);

					$this->email->subject('Buku Tamu Baru IndoQuran.Web.Id Dari '.$name);
					$this->email->message('Buku Tamu Dari : '.$name.'<br/>Email : <a href="mailto:'.$email.'">'.$email.'</a><br/>Isi : '.$text);

					// $this->email->send();

					$data = array(
						'name' => $name,
						'email' => $email,
						'text' => $newText,
						'email_status' => $this->email->print_debugger()
					);

					if ($this->db->insert('bukutamu', $data)) {
						$arr = array(
							'success' => true,
							'msg' => 'Sukses memasukkan bukutamu dari '.$name
						);
					} else {
						$arr = array(
							'success' => false,
							'msg' => 'Gagal memasukkan bukutamu dari '.$name
						);
					}
				} else {
					$arr = array(
						'success' => false,
						'msg' => "Maaf ".$name.", alamat email \"".$email."\" tidak valid!"
					);
				}
				return json_encode($arr);
                break;
            case "read" :
                    $query = $this->db->select('*')->from('bukutamu')->order_by($sort, $dir)->limit($limit, $start)->get();
                    foreach ($query->result() as $row) {
                        $arr['data'][] = array(
                            'id' => $row->id,
                            'date' => $row->date,
                            'tgl' => date('d-M-Y H:i:s',strtotime($row->date)),
                            'name' => $row->name,
                            'email' => $row->email,
                            'text' => htmlspecialchars_decode(str_replace("\\", "", $row->text), ENT_QUOTES),
                            'email_status' => $row->email_status
                        );
                    }
                    $arr['jum'] = $this->db->count_all('bukutamu');
					$arr['start'] = $start;
					
					if ( ! $memGetBukuTamu = $this->cache->memcached->get('mem_get_bukutamu_mobile'.$sort.$dir.$limit.$start)) {
						$memGetBukuTamu = json_encode($arr);
						$this->cache->memcached->save('mem_get_bukutamu_mobile'.$sort.$dir.$limit.$start, $memGetBukuTamu, 300);
					}
			        return $memGetBukuTamu;
			        
                break;
        }
    }
	
	function m_getBukuTamuId($id) {
		$qry = $this->db->select("id,DATE_FORMAT(date,'%d-%M-%Y %H:%i:%s') as date,name,email,REPLACE(text,'&lt;br&gt;','') as text",false)->get_where('bukutamu',array('id'=>$id));
		if ( ! $memGetBukuTamuId = $this->cache->memcached->get('mem_get_bukutamu_id_mobile'.$id)) {
			$memGetBukuTamuId = json_encode($qry->result());
			$this->cache->memcached->save('mem_get_bukutamu_id_mobile'.$id, $memGetBukuTamuId, 300);
		}
        return $memGetBukuTamuId;
	}
	
	function m_getAllAyat() {
        $juzID = $this->input->post('juzID') == '' ? 0 : $this->input->post('juzID');
        // $start = ($this->input->post('page') - 1) * $this->input->post('limit');

        $this->db->start_cache();
		$this->db->select('a.ID,a.SuraID,a.VerseID,b.nama surah',false);
		$this->db->join('surah b', 'a.SuraID=b.id');
        $this->db->get('quran_indo a');
		if ($juzID != 0) {
			switch($juzID) {
				case 1 : $this->db->where(array('a.ID >= '=> 1,'a.ID < '=> 149));
					break;
				case 2 : $this->db->where(array('a.ID >= '=> 149,'a.ID < '=> 260));
					break;
				case 3 : $this->db->where(array('a.ID >= '=> 260,'a.ID < '=> 385));
					break;
				case 4 : $this->db->where(array('a.ID >= '=> 385,'a.ID < '=> 517));
					break;
				case 5 : $this->db->where(array('a.ID >= '=> 517,'a.ID < '=> 641));
					break;
				case 6 : $this->db->where(array('a.ID >= '=> 641,'a.ID < '=> 752));
					break;
				case 7 : $this->db->where(array('a.ID >= '=> 752,'a.ID < '=> 800));
					break;
				case 8 : $this->db->where(array('a.ID >= '=> 800,'a.ID < '=> 1042));
					break;
				case 9 : $this->db->where(array('a.ID >= '=> 1042,'a.ID < '=> 1201));
					break;
				case 10 : $this->db->where(array('a.ID >= '=> 1201,'a.ID < '=> 1329));
					break;
				case 11 : $this->db->where(array('a.ID >= '=> 1329,'a.ID < '=> 1479));
					break;
				case 12 : $this->db->where(array('a.ID >= '=> 1479,'a.ID < '=> 1649));
					break;
				case 13 : $this->db->where(array('a.ID >= '=> 1649,'a.ID < '=> 1804));
					break;
				case 14 : $this->db->where(array('a.ID >= '=> 1804,'a.ID < '=> 2030));
					break;
				case 15 : $this->db->where(array('a.ID >= '=> 2030,'a.ID < '=> 2215));
					break;
				case 16 : $this->db->where(array('a.ID >= '=> 2215,'a.ID < '=> 2484));
					break;
				case 17 : $this->db->where(array('a.ID >= '=> 2484,'a.ID < '=> 2674));
					break;
				case 18 : $this->db->where(array('a.ID >= '=> 2674,'a.ID < '=> 2876));
					break;
				case 19 : $this->db->where(array('a.ID >= '=> 2876,'a.ID < '=> 3219));
					break;
				case 20 : $this->db->where(array('a.ID >= '=> 3219,'a.ID < '=> 3385));
					break;
				case 21 : $this->db->where(array('a.ID >= '=> 3385,'a.ID < '=> 3564));
					break;
				case 22 : $this->db->where(array('a.ID >= '=> 3564,'a.ID < '=> 3727));
					break;
				case 23 : $this->db->where(array('a.ID >= '=> 3727,'a.ID < '=> 4090));
					break;
				case 24 : $this->db->where(array('a.ID >= '=> 4090,'a.ID < '=> 4265));
					break;
				case 25 : $this->db->where(array('a.ID >= '=> 4265,'a.ID < '=> 4511));
					break;
				case 26 : $this->db->where(array('a.ID >= '=> 4511,'a.ID < '=> 4706));
					break;
				case 27 : $this->db->where(array('a.ID >= '=> 4706,'a.ID < '=> 5105));
					break;
				case 28 : $this->db->where(array('a.ID >= '=> 5105,'a.ID < '=> 5242));
					break;
				case 29 : $this->db->where(array('a.ID >= '=> 5242,'a.ID < '=> 5673));
					break;
				case 30 : $this->db->where(array('a.ID >= '=> 5673));
					break;
			}
        }
        $this->db->stop_cache();
        $total = $this->db->get()->num_rows();
        // $this->db->limit($this->input->post('limit'), $start);
        $query = $this->db->get();
        return json_encode($query->result());
    }
	
	function m_displayAyat($id = 0) {
        $query = $this->db->select('*')->from('quran_indo a')->where(array('a.ID' => $id))->get();
        foreach ($query->result() as $key) {
			$text = '<div align="right">' . quran_img($key->img) .
					'<br/><br/><font style="color:#666666; font-size:12px; line-height:16px;">'.$key->baca.'</font></div>
					<hr noshade size=1>
						<iframe src="'.base_url().'mobile/mp3player/'.$key->ID.'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:30px;" allowtransparency="true"></iframe>
					<hr noshade size=1>
						<font size="4"><b>"' . $key->AyahTextNew . '"</b></font>
					<hr noshade size=1>
						'.$key->AyahPenjelasan;
        }
        
        if ( ! $memGetAyatId = $this->cache->memcached->get('mem_get_ayat_id_mobile'.$id)) {
			$memGetAyatId = $text;
			$this->cache->memcached->save('mem_get_ayat_id_mobile'.$id, $memGetAyatId, 300);
		}
        return $memGetAyatId;
    }
	
	function m_getJumAyat($surahId) {
		$q = $this->db->select('id,nama,jum_ayat')->get_where('surah',array('id'=>$surahId));
		$r = $q->row();
		$jum = $r->jum_ayat;
		$t = $this->db->select('ID')->from('quran_indo')->where('SuraID',$r->id)->order_by('VerseID','asc')->limit(1)->get();
		$d = $t->row();
		$ayatId = $d->ID;
		$arr = array();
		for($i=1;$i<=$jum;$i++) {
			$arr[] = array(
				'ID' => $ayatId,
				'SuraID' => $r->id,
				'VerseID' => $i,
				'surah' => str_replace("'", "`", $r->nama)
			);
			$ayatId++;
		}
		
		if ( ! $memGetJumAyatId = $this->cache->memcached->get('mem_get_ayat_id_mobile'.$surahId)) {
			$memGetJumAyatId = json_encode($arr);
			$this->cache->memcached->save('mem_get_ayat_id_mobile'.$surahId, $memGetJumAyatId, 300);
		}
        return $memGetJumAyatId;
	}
}