<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/10/16
 * Time: 08:32
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class DownloadStat extends MongoDB
{
    protected $collection = 'download_stat';
    protected $primaryKey = 'id';
}