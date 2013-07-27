<?php

class M_quran extends CI_Model {
	function m_insertLogPengunjung() {
		//tipe agent
        if ($this->agent->is_browser()) {
            $nama_user_agent = $this->agent->browser() . ' ' . $this->agent->version();
        } elseif ($this->agent->is_robot()) {
            $nama_user_agent = $this->agent->robot();
        } elseif ($this->agent->is_mobile()) {
            $nama_user_agent = $this->agent->mobile();
        } else {
            $nama_user_agent = $this->agent->agent_string();
        }
	
		// $this->session->set_userdata(array('visitId'=>null));
		//insert data pengunjung
		$clientData = array(
			'VisIP' => $this->input->ip_address(),
			'VisRef' => $this->agent->referrer(),
			'VisUrl' => $_SERVER['REQUEST_URI'],
			'VisDate' => date('Y-m-d H:i:s'),
			'VisAgent' => $nama_user_agent,
			'VisPlatform' => $this->agent->platform(),
			'VisAgentString' => $this->agent->agent_string()
		);
		$visId = $this->session->userdata('visitId');
		if(empty($visId)) {
			$this->db->insert('logs', $clientData);
			$this->session->set_userdata(array('visitId'=>$this->db->insert_id()));
		}
	}

    function m_displayAyat($id = 0) {
		$cariKata = $this->input->post('cariKata') == '' ? '' : $this->input->post('cariKata');
        $query = $this->db->select('*')->from('quran_indo a')->join('surah b', 'a.SuraID=b.id')->where(array('a.ID' => $id))->get();
        foreach ($query->result() as $key) {
			$hasil = $key->AyahTextNew;
			$urlAyat = base_url() . 'quran/viewAyat/' . $key->ID;
			$urlEncode = urlencode($urlAyat);
			$datatext = '['.$key->SuraID.':'.$key->VerseID.'] '.$key->nama.' ('.$key->arti.'):Ayat '.$key->VerseID.' - '.$key->arab;
			// $penjelasan = html_entity_decode($key->AyahPenjelasan);
			if($cariKata != '') {
				$arrKata = explode(" ",$cariKata);
				foreach ($arrKata as $v) {
					$hasil = str_replace($v, '<font color="blue"><u>'.$v.'</u></font>', $hasil);
				}
			}
			/*
            $text = '<div align="right">' . quran_img($key->img) .
					'<br/><br/><font style="color:#666666; font-size:12px; line-height:16px;">'.$key->baca.'</font></div>
					<hr noshade size=1>
						' . quran_mp3($key->mp3) . '
					<hr noshade size=1>
						"' . $hasil . '"
					<hr noshade size=1>
						MP3 : <a href="' . path_asset("quran_" . $key->mp3) . '">DOWNLOAD</a><br>
						IMG : <a href="http://www.everyayah.com/data/quranpngs/' . $key->SuraID . '_' . $key->VerseID . '.png" target="_blank">DOWNLOAD</a><br>
						LINK : <a href="' . base_url() . 'quran/viewAyat/' . $key->ID . '" target="_blank">' . base_url() . 'quran/viewAyat/' . $key->ID . '</a>';
						
					//fb share
					<a href="javascript:void(0)" 
						  onclick="
							window.open(
							  \'https://www.facebook.com/sharer/sharer.php?u='.$urlEncode.'\',
							  \'facebook-share-dialog\', 
							  \'width=626,height=436\'); 
							return false;">
						'.image_asset('fb_share.png').'</a>
			*/
			$text = '<div align="right">' . quran_img($key->img) .
					'<br/><br/><font style="color:#666666; font-size:12px; line-height:16px;">'.$key->baca.'</font></div>
					<hr noshade size=1>
						' . quran_mp3($key->mp3) . '
					<hr noshade size=1>
						<h4>' . $hasil . '</h4>
					<hr noshade size=1>
						'.$key->AyahPenjelasan.'
					<p align="center">
					<iframe allowtransparency="true" frameborder="0" scrolling="no"
						src="'.base_url().'quran/fbTwitterShare/'.$key->ID.'"
						style="width:300px; height:28px;">
					</iframe>
					</p>
					';
        }
        if ( ! $memDisplayAyat = $this->cache->memcached->get('mem_display_ayat'.$id)) {
			$memDisplayAyat = $text;
			$this->cache->memcached->save('mem_display_ayat'.$id, $memDisplayAyat, 300);
		}
        return $memDisplayAyat;
    }

    function m_getAllAyat() {
        $kata = $this->input->post('kata') == '' ? '' : $this->input->post('kata');
        $SuraID = $this->input->post('SuraID') == '' ? 0 : $this->input->post('SuraID');
        $juzID = $this->input->post('juzID') == '' ? 0 : $this->input->post('juzID');
        $start = ($this->input->post('page') - 1) * $this->input->post('limit');

        $this->db->start_cache();
        if ($kata != "") {
            $this->db->select("*, CONCAT('QS. [',a.SuraID,':',a.VerseID,']') as qs", false);
        } else {
            $this->db->select("*, CONCAT('QS. [',a.SuraID,':',a.VerseID,']') as qs", false);
        }

        if ($this->input->post('sesuai') == 'true') {
            $this->db->like('a.AyahText', $kata, 'both');
        } else {
            $pieces = explode(" ", $kata);
            foreach ($pieces as &$val) {
                $this->db->like('a.AyahText', $val, 'both');
            }
        }
        $this->db->get('quran_indo a');
        $this->db->join('surah b', 'a.SuraID=b.id');
        if ($SuraID != 0) {
            $this->db->where('a.SuraID', $SuraID);
        }
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
        $this->db->limit($this->input->post('limit'), $start);
        $query = $this->db->get();

        // $total = $this->db->select('*')->from('quran_indo')->like('AyahText', $kata, 'both')->get()->num_rows();
        
        if ( ! $memGetAllAyat = $this->cache->memcached->get('mem_get_all_ayat'.$kata.$SuraID.$juzID.$start)) {
			$memGetAllAyat = '({total:' . $total . ',data:' . json_encode($query->result()) . '})';
			$this->cache->memcached->save('mem_get_all_ayat'.$kata.$SuraID.$juzID.$start, $memGetAllAyat, 300);
		}
        return $memGetAllAyat;
    }

    function m_getPengunjung() {
        $sort = $this->input->post('sort') != '' ? $this->input->post('sort') : 'VisDate';
        $dir = $this->input->post('dir') != '' ? $this->input->post('dir') : 'DESC';
		$filters = $this->input->post('filter') != '' ? $this->input->post('filter') : null;

        $start = ($this->input->post('page') - 1) * $this->input->post('limit');
        $this->db->start_cache();
        $this->db->select('*')->from('logs')->order_by($sort, $dir);

        if ($this->input->post('tglKunjung') != '') {
            $tglKunjung = substr($this->input->post('tglKunjung'), 0, 10);
            $this->db->like('VisDate', date('Y-m-d', strtotime($tglKunjung)), 'after');
        }
		
		if (is_array($filters)) {
			$encoded = false;
		} else {
			$encoded = true;
			$filters = json_decode($filters);
		}

		if (is_array($filters)) {
			for ($i=0;$i<count($filters);$i++){
				$filter = $filters[$i];

				// assign filter data (location depends if encoded or not)
				if ($encoded) {
					$field = $filter->field;
					$value = $filter->value;
					$compare = isset($filter->comparison) ? $filter->comparison : null;
					$filterType = $filter->type;
				} else {
					$field = $filter['field'];
					$value = $filter['data']['value'];
					$compare = isset($filter['data']['comparison']) ? $filter['data']['comparison'] : null;
					$filterType = $filter['data']['type'];
				}

				switch($filterType){
					case 'string' : 
						$this->db->like($field,$value);
					break;
					case 'list' :
						if (strstr($value,',')){
							$fi = explode(',',$value);
							for ($q=0;$q<count($fi);$q++){
								$fi[$q] = "'".$fi[$q]."'";
							}
							$value = implode(',',$fi);
							$this->db->where_in($field, $value);
						}else{
							$this->db->where($field,$value);
						}
					break;
					case 'boolean' : $this->db->where($field,$value); Break;
					case 'numeric' :
						switch ($compare) {
							case 'eq' : $this->db->where($field,$value); Break;
							case 'lt' : $this->db->where($field.' < ',$value); Break;
							case 'gt' : $this->db->where($field.' > ',$value); Break;
						}
					Break;
					case 'date' :
						switch ($compare) {
							case 'eq' : $this->db->like($field,date('Y-m-d',strtotime($value)),'after'); Break;
							case 'lt' : $this->db->where($field.' < ',date('Y-m-d',strtotime($value))); Break;
							case 'gt' : $this->db->where($field.' > ',date('Y-m-d',strtotime($value))); Break;
						}
					Break;
				}
			}
		}

        $total = $this->db->get()->num_rows();
        $this->db->stop_cache();

        $this->db->limit($this->input->post('limit'), $start);
        $query = $this->db->get();

        return '({total:' . $total . ',data:' . json_encode($query->result_object()) . '})';
    }

    function m_statistik() {
        $tipe = $this->input->post('tipe') == '' ? 'harian' : $this->input->post('tipe');
        $chartVar = $this->input->post('chartVar') == '' ? '0' : $this->input->post('chartVar');
        $lim = $this->input->post('limit') == '' ? '0' : $this->input->post('limit');
		$result = null;

        if ($chartVar == 0) {
            $limit1 = -1;
            $limit2 = $lim;
        } else {
            $limit1 = (($chartVar * -1) * $lim);
            $limit2 = (($chartVar * -1) + 1) * $lim;
        }

        switch ($tipe) {
            case 'harian' : {
                    $result = $this->db->query("
					SELECT DISTINCT FROM_UNIXTIME(UNIX_TIMESTAMP(VisDate),\"%W, %d-%b-%Y\") AS judul, COUNT(*) AS jumlah
					FROM `logs`
					WHERE UNIX_TIMESTAMP(VisDate) BETWEEN UNIX_TIMESTAMP('".date('Y-m-d',strtotime("-".$limit2." day"))."') AND UNIX_TIMESTAMP('".date('Y-m-d',strtotime("-".$limit1." day"))."')
					GROUP BY judul
					ORDER BY VisDate
				");
                } break;
            case 'bulanan' : {
					$result = $this->db->query("
						SELECT DISTINCT FROM_UNIXTIME(UNIX_TIMESTAMP(VisDate),\"%b-%Y\") AS judul, COUNT(*) AS jumlah
						FROM `logs`
						WHERE UNIX_TIMESTAMP(VisDate) BETWEEN UNIX_TIMESTAMP('".date('Y-m',strtotime("-".$limit2." month"))."-01') AND UNIX_TIMESTAMP('".date('Y-m',strtotime("-".$limit1." month"))."-01')
						GROUP BY judul
						ORDER BY VisDate
					");
                } break;
            case 'tahunan' : {
                    $result = $this->db->query("
						SELECT DISTINCT FROM_UNIXTIME(UNIX_TIMESTAMP(VisDate),\"%Y\") AS judul, COUNT(*) AS jumlah
						FROM `logs`
						WHERE UNIX_TIMESTAMP(VisDate) BETWEEN UNIX_TIMESTAMP('".date('Y-',strtotime("-".$limit2." year"))."01-01') AND UNIX_TIMESTAMP('".date('Y-',strtotime("-".$limit1." year"))."01-01')
						GROUP BY judul
						ORDER BY VisDate
					");
                } break;
        }
		// echo $this->db->last_query();
		
		//not using memcached for graphic
		// if ( ! $memGetStatistik = $this->cache->memcached->get('mem_get_statistik'.$tipe.$chartVar.$lim)) {
			// $memGetStatistik = '({rows:' . json_encode($result->result()) . '})';
			// $this->cache->memcached->save('mem_get_statistik'.$tipe.$chartVar.$lim, $memGetStatistik, 300);
		// }
        // return $memGetStatistik;
		return '({rows:' . json_encode($result->result()) . '})';
    }

    function m_statistikLast() {
        $tipe = $this->input->post('tipe') == '' ? 'harian' : $this->input->post('tipe');
        $chartVar = $this->input->post('chartVar') == '' ? '0' : $this->input->post('chartVar');
        $lim = $this->input->post('limit') == '' ? '0' : $this->input->post('limit');

		if ($chartVar == 0) {
            $limit1 = $lim;
        } else {
            $limit1 = (($chartVar * -1) * $lim);
        }
		

        $jum = 0;
        switch ($tipe) {
            case 'harian' : {
                    $query = $this->db->query("
						SELECT COUNT(*) AS jum
						FROM `logs`
						WHERE UNIX_TIMESTAMP(VisDate) < UNIX_TIMESTAMP('".date('Y-m-d',strtotime("-".$limit1." day"))."')
					");
					$obj = $query->row();
                    $jum = $obj->jum;
                } break;
            case 'bulanan' : {
                    $query = $this->db->query("
						SELECT COUNT(*) AS jum
						FROM `logs`
						WHERE UNIX_TIMESTAMP(VisDate) <= UNIX_TIMESTAMP('".date('Y-m',strtotime("-".$limit1." month"))."-01')
					");
					$obj = $query->row();
                    $jum = $obj->jum;
                } break;
            case 'tahunan' : {
                    $query = $this->db->query("
						SELECT COUNT(*) AS jum
						FROM `logs`
						WHERE UNIX_TIMESTAMP(VisDate) <= UNIX_TIMESTAMP('".date('Y-',strtotime("-".$limit1." year"))."-01-01')
					");
					$obj = $query->row();
                    $jum = $obj->jum;
                } break;
        }
		// echo $this->db->last_query();
        return $jum;
    }

    function m_bukuTamu($act) {
        $name = $this->input->post('name') == '' ? '' : $this->input->post('name');
        $email = $this->input->post('email') == '' ? '' : $this->input->post('email');
        $text = $this->input->post('text') == '' ? '' : $this->input->post('text');
        $newText = preg_replace('/[^[:print:]]/', '', $this->input->post('text'));
        $newText = htmlspecialchars($newText, ENT_QUOTES);
        $limit = $this->input->post('limit') == '' ? 10 : $this->input->post('limit');
        $start = $this->input->post('start') == '' ? 0 : $this->input->post('start');
        $dir = $this->input->post('dir') == '' ? 'DESC' : $this->input->post('dir');
        $sort = $this->input->post('sort') == '' ? 'date' : $this->input->post('sort');

        switch ($act) {
            case "insert" : {
				$this->email->from($email, $name);
				$this->email->to('kontak@indoquran.web.id');
				$this->email->cc($email);

				$this->email->subject('Buku Tamu Baru IndoQuran.Web.Id Dari '.$name);
				$this->email->message('Buku Tamu Dari : '.$name.'<br/>Email : <a href="mailto:'.$email.'">'.$email.'</a><br/>Isi : '.$text);

				$this->email->send();

                    $data = array(
                        'name' => $name,
                        'email' => $email,
                        'text' => $newText,
                        'email_status' => $this->email->print_debugger()
                    );

                    if ($this->db->insert('bukutamu', $data)) {
                        return "{success:true, Msg:'Sukses memasukkan bukutamu dari $_REQUEST[name]'}";
                    } else {
                        return "{success:false, Msg:'Gagal memasukkan bukutamu dari $_REQUEST[name]'}";
                    }
                } break;
            case "read" : {
                    $query = $this->db->select('*')->from('bukutamu')->order_by($sort, $dir)->limit($limit, $start)->get();
                    $arr = array();
                    foreach ($query->result() as $row) {
                        $arr[] = array(
                            'id' => $row->id,
                            'date' => $row->date,
                            'tgl' => date('d-M-Y H:i:s',strtotime($row->date)),
                            'name' => $row->name,
                            'email' => $row->email,
                            'text' => htmlspecialchars_decode(str_replace("\\", "", $row->text), ENT_QUOTES),
                            'email_status' => $row->email_status
                        );
                    }
                    $sum = $this->db->count_all('bukutamu');
                    if ( ! $memGetBukuTamu = $this->cache->memcached->get('mem_get_bukutamu'.$sort.$dir.$limit.$start)) {
						$memGetBukuTamu = '({success:true, total:' . $sum . ',rows:' . json_encode($arr) . '})';
						$this->cache->memcached->save('mem_get_bukutamu'.$sort.$dir.$limit.$start, $memGetBukuTamu, 300);
					}
			        return $memGetBukuTamu;
                } break;
        }
    }

    function m_randCapcha() {
        $query = $this->db->order_by('cap_id', 'random')->limit(1)->get('capcha');
        $arr = array();
        foreach ($query->result() as $row) {
            $arr[] = "(" . $row->txt . ") => ";
            $arr[] = $row->key;
        }
        return json_encode($arr);
    }

    function m_kataMutiara() {
        $query = $this->db->select('text')->from('katamutiara')->order_by("kataId", "random")->limit(1)->get();
        $kata = '';
        foreach ($query->result() as $row) {
            $kata .= $row->text;
        }
        return $kata;
    }

    function m_getAyatInfo() {
    	$ayatId = $this->input->post('ayatId')==''?0:$this->input->post('ayatId');
        $query = $this->db->query("
			SELECT (SELECT CONCAT('[',a.SuraID, ':', a.VerseID, '] ', b.nama, ' (', b.arti, '), Ayat ', a.VerseID)
				FROM quran_indo a 
				LEFT JOIN surah b ON (a.SuraID=b.id)
				WHERE a.ID = (c.ID - 1)) prev
				,CONCAT('[',c.SuraID, ':', c.VerseID, '] ', d.nama, ' (', d.arti, '), Ayat ', c.VerseID) current
				,(SELECT CONCAT('[',a.SuraID, ':', a.VerseID, '] ', b.nama, ' (', b.arti, '), Ayat ', a.VerseID)
				FROM quran_indo a 
				LEFT JOIN surah b ON (a.SuraID=b.id)
				WHERE a.ID = (c.ID + 1)) next
			FROM quran_indo c 
			LEFT JOIN surah d ON (c.SuraID=d.id)
			WHERE c.ID = '" . $this->input->post('ayatId') . "'
		");
		$row = $query->row();
		
		if ( ! $memGetAyatInfo = $this->cache->memcached->get('mem_get_ayat_info'.$ayatId)) {
			$memGetAyatInfo = '["' . $row->prev . '","' . $row->current . '","' . $row->next . '"]';
			$this->cache->memcached->save('mem_get_ayat_info'.$ayatId, $memGetAyatInfo, 300);
		}
        return $memGetAyatInfo;
    }
	
	function m_getAyatId() {
		$surah = $this->input->post('surah') == '' ? 0 : $this->input->post('surah');
		$ayat = $this->input->post('ayat') == '' ? 0 : $this->input->post('ayat');
		$q = $this->db->get_where('quran_indo',array('SuraID'=>$surah,'VerseID'=>$ayat));
		foreach($q->result() as $r) {
			return $r->ID;
		}
	}

    function m_getJudulAyat($id = 1) {
        $query = $this->db->select("CONCAT('[',a.SuraID, ':', a.VerseID, '] ', b.nama, ' (', b.arti, '):Ayat ', a.VerseID,' - ',b.arab) AS hasil", false)
                        ->from('quran_indo a')
                        ->join('surah b', 'a.SuraID = b.id')
                        ->where('a.ID', $id)->get();
        foreach ($query->result() as $row) {
            $hasil = $row->hasil;
        }
        return $hasil;
    }

    function m_download() {
        $email = $this->input->post('emailField') == '' ? '' : $this->input->post('emailField');
        $url = $this->input->post('urlField') == '' ? '' : $this->input->post('urlField');
		//kalo salah url
        if (($url == "http://www.adrive.com/public/Ma6rDh.html") || ($url == "http://www.adrive.com/public/9WEXDQ.html"))
            $url = 'http://www.4shared.com/file/6F3hFxSJ/application.html';

        if (($url == "http://www.indoquran.web.id/download/AlQuranDigital.chm") || ($url == "http://www.4shared.com/file/Zex0WJ1N/Al_Quran_Digital.html?"))
            $url = 'http://www.4shared.com/file/Zex0WJ1N/Al_Quran_Digital.html';
		//===================================================

        if ($url == 'http://www.4shared.com/file/Zex0WJ1N/Al_Quran_Digital.html') { //jika .chm
            $msg = '<i>Assalamualaikum Warrahmatullahi Wabaroklatuh.</i><br>Berikut alamat download aplikasi : <a href="' . $url . '">' . $url . '</a>.';
            $subjek = 'Download Aplikasi (CHM)';
        } else {
            $msg = '<p><i>Assalamualaikum Warrahmatullahi Wabaroklatuh.</i></p><p>Berikut alamat download aplikasi : <a href="' . $url . '">' . $url . '</a></p><p>Aplikasi ini memiliki password untuk dibuka. Passwordnya adalah "BismillaH", harap diperhatikan huruf besar dan kecilnya karena menggunakan sistem case-sensitif.</p><p>Semoga dapat bermanfaat, salam.</p><p><br/>Admin Indoquran.Web.Id</p>';
            $subjek = 'Download Aplikasi (EXE)';
        }

        $this->email->from('kontak@indoquran.web.id', 'Alquran Digital:Indonesian Transalation');
        $this->email->to($email);
        // $this->email->cc('kontak@indoquran.web.id');

        $this->email->subject($subjek);
        $this->email->message($msg);
        $this->email->send();

        if ($this->db->insert('download_stat', array('ip' => $_SERVER['REMOTE_ADDR'], 'email' => $this->input->post('emailField'), 'email_status' => $this->email->print_debugger()))) {
            echo "{success:true, Msg:'Berhasil download, harap cek email'}";
        }
        else
            echo "{success:false, Msg:'Gagal download'}";
    }
	
	function m_getListSurah() {
		$q = $this->db->select('id,CONCAT(id,": ",nama," (",jum_ayat," Ayat)") as nama_surah,arab,CONCAT("Nama Surah : ",nama,"<br/>Arti : ",arti,"<br/>Tempat Turun : ",tempat_turun,"<br/>Urutan Pewahyuan : ",urutan_pewahyuan) as head_body',false)->from('surah')->order_by('id')->get();
		$arr['rows'][] = array('id'=>0,'head'=>'Nama Surah','nama_surah'=>'Semua Surah... (6.236 Ayat)');
		foreach($q->result() as $r) {
			$arr['rows'][] = array('id'=>$r->id,'head'=>$r->arab,'head_body'=>$r->head_body,'nama_surah'=>$r->nama_surah);
		}
		
		if ( ! $memGetListSurah = $this->cache->memcached->get('mem_get_list_surah')) {
			$memGetListSurah = json_encode($arr);
			$this->cache->memcached->save('mem_get_list_surah', $memGetListSurah, 300);
		}
        return $memGetListSurah;
	}
	
	function m_getListSurahId() {
		$q = $this->db->select('id,CONCAT(nama," [",arti,"]") as txt',false)->from('surah')->order_by('id')->get();
		$arr['rows'][] = array('id'=>0,'head'=>'Nama Surah','txt'=>'Semua Surah');
		foreach($q->result() as $r) {
			$arr['rows'][] = array('id'=>$r->id,'head'=>'Nama Surah','txt'=>$r->txt);
		}
		
		if ( ! $memGetListSurahId = $this->cache->memcached->get('mem_get_list_surah_id')) {
			$memGetListSurahId = json_encode($arr);
			$this->cache->memcached->save('mem_get_list_surah_id', $memGetListSurahId, 300);
		}
        return $memGetListSurahId;
	}
	
	function m_getListAyatId() {
		$SuraID = $this->input->post('SuraID') == '' ? '' : $this->input->post('SuraID');
		$s = $this->db->get_where('surah',array('id'=>$SuraID))->row();
		$namaSurah = $s->nama;
		$jumAyat = $s->jum_ayat;
		$arr['rows'] = array();
		for($i=1;$i<=$jumAyat;$i++) {
			$arr['rows'][] = array('id'=>$i,'head'=>'Nama Ayat','txt'=>$namaSurah.' : ayat('.$i.')');
		}
		
		if ( ! $memGetListAyatId = $this->cache->memcached->get('mem_get_list_ayat_id'.$SuraID)) {
			$memGetListAyatId = json_encode($arr);
			$this->cache->memcached->save('mem_get_list_ayat_id'.$SuraID, $memGetListAyatId, 300);
		}
        return $memGetListAyatId;
	}
	
	function m_getListPlatform() {
		$q = $this->db->select('VisPlatform as id,VisPlatform as text')->from('logs')->group_by('VisPlatform')->order_by('VisPlatform')->get();
		
		if ( ! $memGetListPlatform = $this->cache->memcached->get('mem_get_list_platform')) {
			$memGetListPlatform = json_encode($q->result());
			$this->cache->memcached->save('mem_get_list_platform', $memGetListPlatform, 300);
		}
        return $memGetListPlatform;
	}
	
	function m_autoCompleteSearch() {
        $start = $this->input->get('start') != '' ? $this->input->get('start') : 0;
        $count = $this->input->get('limit') != '' ? $this->input->get('limit') : 20;
        $callback = $this->input->get('callback') != '' ? $this->input->get('callback') : '';
		$cari = $this->input->get('query') != '' ? $this->input->get('query') : '';
		$cari = explode(" ", $cari);
		
		$this->db->start_cache();
		$this->db->select('*')->from('quran_indo');
		foreach ($cari as $v) {
			$this->db->like('AyahText',$v);
		}
		$this->db->stop_cache();
        $total = $this->db->get()->num_rows();
        $query = $this->db->limit($count, $start)->get();
        
        if ( ! $memGetAutoComplete = $this->cache->memcached->get('mem_get_list_autocomplete'.json_encode($cari))) {
			$memGetAutoComplete = $callback . '({"total":"' . $total . '","data":' . json_encode($query->result_object()) . '})';
			$this->cache->memcached->save('mem_get_list_autocomplete'.json_encode($cari), $memGetAutoComplete, 300);
		}
        return $memGetAutoComplete;
	}

	function m_setLogActivity($txt='') {
		/*
		$q = $this->db->get_where('aktifitas',array('log_id'=>$this->session->userdata('visitId')));
		$jum = $q->num_rows();
		if($jum>0) {
			$row = $q->row();
			$aktifitas = substr($row->aktifitas,0,-2);
			$data = array(
				'url'=>current_url().'/'.$txt,
				'tgl'=>date('Y-m-d H:i:s')
			);
			$this->db->update('aktifitas',array('aktifitas'=>$aktifitas.','.json_encode($data).']}'),array('log_id'=>$this->session->userdata('visitId')));
			
		} else {
			$data['dataAktifitas'][] = array(
				'url'=>current_url(),
				'tgl'=>date('Y-m-d H:i:s')
			);
			$this->db->insert('aktifitas',array('log_id'=>$this->session->userdata('visitId'),'aktifitas'=>json_encode($data)));
		}
		*/
	}
	
	function m_getTarjamah($id) {
		$q = $this->db->get_where('quran_indo',array('ID'=>$id));
		if ($q->num_rows() > 0) {
			$row = $q->row();
			return $row->AyahText;
		}
		else return "";
	}
	
	function m_fbTwitterShare($ayatId = 1) {
		$query = $this->db->select('*')->from('quran_indo a')->join('surah b', 'a.SuraID=b.id')->where(array('a.ID' => $ayatId))->get();
        foreach ($query->result() as $key) {
			$urlAyat = base_url() . 'quran/viewAyat/' . $key->ID;
			$urlEncode = urlencode($urlAyat);
			$datatext = '['.$key->SuraID.':'.$key->VerseID.'] '.$key->nama.' ('.$key->arti.'):Ayat '.$key->VerseID.' - '.$key->arab;
			return '<html>
			<head></head>
			<body style="margin: 0;padding: 0;">
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=462282400477128";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, \'script\', \'facebook-jssdk\'));</script>
			<div class="fb-like" data-href="'.$urlAyat.'" data-send="true" data-layout="button_count" data-width="450" data-show-faces="true" data-font="arial"></div>
			<a href="https://twitter.com/share" class="twitter-share-button" data-url="'.$urlAyat.'" data-text="'.$datatext.'" data-via="novaherdi" data-hashtags="indoquran.web.id" data-size="large">Tweet</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
			</body>
			</html>';
		}
	}
}