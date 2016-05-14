<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/8/16
 * Time: 19:02
 */

namespace App\Http\Controllers\Desktop;

use App\Http\Model\DownloadStat;
use DB;
use App\Http\Controllers\Controller;

class Read extends Controller
{
    public function index()
    {
        $datas = DB::table('download_stat')->get();
        foreach ($datas as $key => $val) {
            $model = DownloadStat::query()
                ->findOrNew($val->id);
            foreach ($val as $k => $v) {
                $model->$k = $v;
            }
            $model->save();
        }
    }
}