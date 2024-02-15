<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\BikesaleController;
use App\Http\Controllers\BikeServiceController;
use App\Http\Controllers\Old_sale;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/',[AuthenticateController::class,'index']);
Route::post('/sign',[AuthenticateController::class,'signIn'])->name('signin');
Route::get('/signIn',[AuthenticateController::class,'index'])->name('signInform');
Route::get('/logout',[AuthenticateController::class,'signOut'])->name('logOut');





// Route::get('/dashboards',[Dashboard::class,'dash'])->name('dash');

Route::resource('/category',CategoryController::class);

Route::resource('/expense',ExpenseController::class);

Route::resource('/role',RoleController::class);

/*Product*/
Route::resource('/product',ProductController::class);
Route::get('/products',[ProductController::class,'indexsale'])->name('indexsale');

/*Bike*/
Route::resource('/bike',BikeController::class);
Route::get('/method',[BikesaleController::class,'method']);
/*Bike Sale*/
Route::resource('/bike-sale',BikesaleController::class);
Route::get('/bike_sales',[BikesaleController::class,'bikeinvoice'])->name('bikeinvoice');

/*Product Sale */
Route::resource('/sale',SaleController::class);
Route::get('/sales/{product_name}',[SaleController::class,'add_sales'])->name('add_sale');
Route::get('/product_sales/reports',[SaleController::class,'reports'])->name('reports');
Route::get('/product_report',[SaleController::class,'product_report'])->name('pro_report');
Route::get('/show_sale',[SaleController::class,'show_sale'])->name('show_sale');
Route::get('/invoice/{invoiceId}',[SaleController::class,'invoice'])->name('invoice');

/*Old Sale Add */
Route::get('/add_old_bike_sales',[BikesaleController::class,'add_old_bike_sale'])->name('add_old_bike_sale');
Route::get('/add_old_sales',[SaleController::class,'add_old_sale'])->name('add_old_sale');

/*Bike Service*/
Route::get('service/first',[BikeServiceController::class,'index'])->name('index');
Route::get('service/second',[BikeServiceController::class,'second'])->name('second');
Route::get('service/third',[BikeServiceController::class,'third'])->name('third');
Route::get('service/fourth',[BikeServiceController::class,'fourth'])->name('fourth');
Route::get('service/fifth',[BikeServiceController::class,'fifth'])->name('fifth');
Route::get('service/sixth',[BikeServiceController::class,'sixth'])->name('sixth');
Route::get('service/seventh',[BikeServiceController::class,'seventh'])->name('seventh');
Route::get('service/eighth',[BikeServiceController::class,'eighth'])->name('eighth');

Route::get('/pdf',[ProductController::class,'downloadpdf'])->name('pdf');
