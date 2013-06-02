<?php

class M_mobile extends CI_Model {
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
                    return json_encode($arr);
                break;
        }
    }
	
	function m_getBukuTamuId($id) {
		$qry = $this->db->select("id,DATE_FORMAT(date,'%d-%M-%Y %H:%i:%s') as date,name,email,REPLACE(text,'&lt;br&gt;','') as text",false)->get_where('bukutamu',array('id'=>$id));
		return json_encode($qry->result());
	}
}