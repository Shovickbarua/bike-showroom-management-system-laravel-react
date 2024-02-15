import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            {/* <!-- Main Sidebar Container --> */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <Link to="#" className="brand-link">
                    <img src="/dist/img/Capture.png" alt="HF Logo" />
                    <span className="brand-text font-weight-light"></span>
                </Link>

                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="/dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <Link to="#" className="d-block">
                                Alexander Pierce
                            </Link>
                        </div>
                    </div>

                    {/* <!-- SidebarSearch Form --> */}
                    <div className="form-inline">
                        <div
                            className="input-group"
                            data-widget="sidebar-search"
                        >
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/* <!-- Add icons to the links using the .nav-icon className
                 with font-awesome or any other icon font library --> */}
                            <li className="nav-item menu-open">
                                <Link
                                    to="dashboard"
                                    className="nav-link active"
                                >
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>
                                        Role
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Roles</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>
                                        Product
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="product" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Product List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="product/add"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Product</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Sale List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bike-sale/old" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Old Sale</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Categories
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="categories/add"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Category</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="categories"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Category List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>
                                        Bike
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="bike/add"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Bike</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="bike" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Bike List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="bike-sale" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Bike Sale List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bike-sale/old" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Old Bike Sale</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Bike Services
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/service" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Service List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Reports
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Sale Reports</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Bike Sale Reports</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Product Stock Reports</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Bike Stock Reports</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Income & Expenses
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Expense</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Expense List</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Expense Report</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Income</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Income List</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Income Report</p>
                                        </Link>
                                        <Link to="" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Daily Income</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </>
    );
};

export default Sidebar;
