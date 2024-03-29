<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BikeSale extends Model
{
    use HasFactory;

    public function method(){
        return $this->belongsTo(Method::class,'method_id');
    }
}
