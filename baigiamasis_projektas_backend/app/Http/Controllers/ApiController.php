<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ApiController extends Controller
{
    public function allProducts(){
        $products = Product::select(
            'products.*',
            'categories.name as category_name')
            ->join('categories', 'categories.id', '=', 'products.catId')
            ->get();

        return $products;
    }
}
