import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* <!-- Left navbar links --> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                        role="button"
                    >
                        <i className="fas fa-bars"></i>
                    </Link>
                </li>
            </ul>

            {/* <!-- Right navbar links --> */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        data-widget="fullscreen"
                        href="#"
                        role="button"
                    >
                        <i className="fas fa-expand-arrows-alt"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="" className="nav-link">
                        <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
