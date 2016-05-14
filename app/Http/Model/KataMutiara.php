<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/9/16
 * Time: 22:36
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class KataMutiara extends MongoDB
{
    protected $collection = 'kata_mutiara';
    protected $primaryKey = 'kataId';
}