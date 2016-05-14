<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/10/16
 * Time: 08:28
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class TopikGroup extends MongoDB
{
    protected $collection = 'topik_grup';
    protected $primaryKey = 'id';
}