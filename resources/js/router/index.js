import React, { Suspense } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Guest from './guest';
import Login from '../Login';
import Auth from './auth';
import Dashboard from '../pages/dashboards/Dashboard';
import Product from '../pages/products/Product';
import ProductForm from '../pages/products/ProductForm';
import Income from '../pages/incomes/Income';
import IncomeForm from '../pages/incomes/IncomeForm';
import Expense from '../pages/expenses/Expense';
import ExpenseForm from '../pages/expenses/ExpenseForm';
import Bike from '../pages/bikes/Bike';
import BikeForm from '../pages/bikes/BikeForm';
function app() {
  const routes = createRoutesFromElements(
    <Route>
      {/* <Route path='/' element={<Guest/>}>
        <Route path='' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
      </Route> */}
      <Route path='/' element={<Auth/>}>
        <Route path='' element={<Dashboard/>}/>

        <Route path='/product' element={<Product/>}/>
        <Route path='/product/add' element={<ProductForm/>}/>
        <Route path='/product/edit/:id' element={<ProductForm/>}/>

        <Route path='/incomes' element={<Income/>}/>
        <Route path='/incomes/add' element={<IncomeForm/>}/>
        <Route path='/incomes/edit/:id' element={<IncomeForm/>}/>
        
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/expense/add' element={<ExpenseForm/>}/>
        <Route path='/expense/edit/:id' element={<ExpenseForm/>}/>
        
        <Route path='/bike' element={<Bike/>}/>
        <Route path='/bike/add' element={<BikeForm/>}/>
        <Route path='/bike/edit/:id' element={<BikeForm/>}/>
        
        <Route path='/categories' element={<Bike/>}/>
        <Route path='/categories/add' element={<BikeForm/>}/>
        <Route path='/categories/edit/:id' element={<BikeForm/>}/>
      </Route>
    </Route>

  )
  return(
      <Suspense fallback="loading">
        <RouterProvider router={createBrowserRouter(routes)} />
      </Suspense>
  )
}

export default app