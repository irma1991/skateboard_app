<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Product;
use App\Order;
use File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OrderController extends Controller
{
    public function orderManagement(){
        $orders = Order::all();
        return view('skateboards.pages.orders_management', compact('orders'));
    }

    public function orderStatusUpdate(Order $order, Request $request){
        $validateData = $request->validate([
            'id' => 'required',
            'buyerName' => 'required',
            'buyerSurname' => 'required',
            'buyerAddress' => 'required',
            'orderStatus' => 'required',
            'productId' => 'required',
            'productQty' => 'required',
            'OrderSum' => 'required',
        ]);

        Order::where('id', request('id'))->update(
            ['orderStatus' => request('processing'),
                'orderStatus' => request('paid'),
                'orderStatus' => request('canceled')
            ]);

        return redirect('/orders_management');
    }
}
