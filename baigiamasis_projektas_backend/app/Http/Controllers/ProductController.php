<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Product;
use File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    public function productForm(){
        $categories = Category::all();
        return view('skateboards.pages.add_product', compact('categories'));
    }

    public function storeProduct(Request $request){
        $validateData = $request->validate([
            'category' => 'required',
            'name' => 'required',
            'description' => 'required',
            'image' => 'mimes:jfif,jpeg,jpg,png,gif|required|max:1000',
            'price' => 'required',
            'quantity' => 'required'
        ]);

        $path = $request->file('image')->store('public/images');
        $fileName = str_replace('public/', "", $path);

        $product = Product::create([
            'catId' => request('category'),
            'name' => request('name'),
            'description' => request('description'),
            'img' => $fileName,
            'price' => request('price'),
            'quantity' => request('quantity'),
            'userId' => Auth::id()
        ]);

        return redirect('/product_management');
    }

    public function productManagement(){
        $products = Product::all();
        return view('skateboards.pages.product_management', compact('products'));
    }

    public static function productDelete(Product $product){
        $product->delete();
        return redirect('/product_management');
    }

    public function productUpdate(Product $product){
        if(Gate::allows('update-post', $product)){
            return view('skateboards.pages.product_update', compact('product'));
        } return redirect('/error');
    }

    public function error(){
        return view('skateboards.pages.error');
    }
}
