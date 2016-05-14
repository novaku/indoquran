<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/9/16
 * Time: 22:40
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class Capcha extends MongoDB
{
    protected $collection = 'capcha';
    protected $primaryKey = 'cap_id';
}