<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $table = 'students';

    public function classes()
    {
        return $this->hasOne(Classes::class,'name','class');
    }
}
