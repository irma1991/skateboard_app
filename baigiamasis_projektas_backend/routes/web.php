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
Route::get('/add_category/', 'HomeController@addCategory');
Route::get('/add_product/', 'HomeController@addProduct');
Route::get('/category_management/', 'HomeController@manageCategory');
Route::get('/product_management/', 'HomeController@manageProduct');
Route::get('/orders_management/', 'HomeController@manageOrders');
