<?php
/**
 * Created by PhpStorm.
 * User: novaherdi
 * Date: 5/8/16
 * Time: 20:50
 */

namespace App\Http\Model\Driver;

use Jenssegers\Mongodb\Eloquent\Model;

/**
 * Load database mongodb connector config
 * Extends this model if you want to connect to mongodb directly
 * Class MongoDb
 * @package App\Model\Driver
 */
class MongoDB extends Model
{
    /**
     * Get configuration for mongodb connection
     * @var string connection
     */
    protected $connection = 'mongodb';

    /**
     * Set $collection value, for other collection in mongodb
     * @var string collection
     */
    protected $collection = 'quran';

    /**
     * Set $primaryKey, based on needs, for default value is _id
     * @var string
     */
    protected $primaryKey = '_id';
}