<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
$config['base_url'] = 'mobile/bukutamuPaging/';
$config['per_page'] = 10;
$config['num_links'] = 2;
$config['use_page_numbers'] = TRUE;
$config['full_tag_open'] = '<div class="pagination pagination-centered pagination-large"><ul>';
$config['full_tag_close'] = '</ul></div>';
$config['first_link'] = false;
$config['first_tag_open'] = '<li>';
$config['first_tag_close'] = '</li>';
$config['last_link'] = false;
$config['last_tag_open'] = '<li>';
$config['last_tag_close'] = '</li>';
$config['prev_link'] = '&lt;';
$config['prev_tag_open'] = '<li>';
$config['prev_tag_close'] = '</li>';
$config['next_tag_open'] = '<li>';
$config['next_tag_close'] = '</li>';
$config['cur_tag_open'] = '<li class="disabled"><a href="javascript:void(null)">';
$config['cur_tag_close'] = '</a></li>';
$config['num_tag_open'] = '<li>';
$config['num_tag_close'] = '</li>';