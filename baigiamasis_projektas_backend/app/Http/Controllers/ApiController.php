<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Order;

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

    public function storeOrders(Request $request){
        Order::create([
            'buyerName' => request('buyerName'),
            'buyerSurname' => request('buyerSurname'),
            'buyerAddress' => request('buyerAddress'),
            'productId' => request('productId'),
            'productQty' => request('productQty'),
            'OrderSum' => request('OrderSum')
        ]);

        return response($request);
    }

    public function getProductById($id){
        return Product::find($id);
    }

}
