import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/login";


const router = createBrowserRouter([
  { path: "/", element: <Login/>, },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

