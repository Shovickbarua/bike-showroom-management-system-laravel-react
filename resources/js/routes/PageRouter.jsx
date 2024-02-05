import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from '../pages/dashboards/Dashboard';
import Product from '../pages/products/Product';
import ProductForm from '../pages/products/ProductForm';
import Income from '../pages/incomes/Income';
import IncomeForm from '../pages/incomes/IncomeForm';
import Expense from '../pages/expenses/Expense';
import ExpenseForm from '../pages/expenses/ExpenseForm';
import Bike from '../pages/bikes/Bike';
import BikeForm from '../pages/bikes/BikeForm';
import Root from "./Root";
import Category from "../pages/categories/Category";
import CategoryForm from "../pages/categories/CategoryForm";
import AddOrder from "../pages/bikes/AddOrder";
import AddOldOrder from "../pages/bikes/AddOldOrder";
import BikeSaleList from "../pages/bikes/BikeSaleList";
import BikeStockList from "../pages/bikes/BikeStockList";
import Service from "../pages/service/Service";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
          path: "/",
          element: <Dashboard/>,
        },

        { path: "/product", element: <Product/>, },
        { path: "/product/add", element: <ProductForm/>, },
        { path: "/product/edit/:id", element: <ProductForm/>, },

        { path: "/incomes", element: <Product/>, },
        { path: "/incomes/add", element: <ProductForm/>, },
        { path: "/incomes/edit/:id", element: <ProductForm/>, },

        { path: "/incomes", element: <Income/>, },
        { path: "/incomes/add", element: <IncomeForm/>, },
        { path: "/incomes/edit/:id", element: <IncomeForm/>, },

        { path: "/expense", element: <Expense/>, },
        { path: "/expense/add", element: <ExpenseForm/>, },
        { path: "/expense/edit/:id", element: <ExpenseForm/>, },

        { path: "/bike", element: <Bike/>, },
        { path: "/bike/add", element: <BikeForm/>, },
        { path: "/bike/edit/:id", element: <BikeForm/>, },
        
        { path: "/bike-sale/add/:id", element: <AddOrder/>, },
        { path: "/bike-sale/old", element: <AddOldOrder/>, },
        { path: "/bike-sale", element: <BikeSaleList/>, },
        { path: "/bike/stock", element: <BikeStockList/>, },

        { path: "/service", element: <Service/>, },

        { path: "/categories", element: <Category/>, },
        { path: "/categories/add", element: <CategoryForm/>, },
        { path: "/categories/edit/:id", element: <CategoryForm/>, },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

