<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/8/16
 * Time: 21:00
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class Surah extends MongoDB
{
    protected $collection = 'surah';
    protected $primaryKey = 'id';
}