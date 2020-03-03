<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/add_category/', 'CategoryController@categoryForm');// parodo forma
Route::post('/store_category/', 'CategoryController@storeCategory'); // siuncia duomenis i db
Route::get('/category_management/', 'CategoryController@categoryManagement');
Route::get('/category_delete/{category}', 'CategoryController@categoryDelete');
Route::get('/add_product/', 'ProductController@productForm');
Route::post('/store_product/', 'ProductController@storeProduct'); // siuncia duomenis i db
Route::get('/product_management/', 'HomeController@manageProduct');
Route::get('/orders_management/', 'HomeController@manageOrders');
