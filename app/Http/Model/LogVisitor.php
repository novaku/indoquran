<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/10/16
 * Time: 08:22
 */

namespace App\Http\Model;


use App\Http\Model\Driver\MongoDB;

class LogVisitor extends MongoDB
{
    protected $collection = 'log_visitor';
    protected $primaryKey = 'VisID';
}