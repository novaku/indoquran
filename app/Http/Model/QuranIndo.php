<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/9/16
 * Time: 22:25
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class QuranIndo extends MongoDB
{
    protected $collection = 'quran_indo';
    protected $primaryKey = 'ID';
}