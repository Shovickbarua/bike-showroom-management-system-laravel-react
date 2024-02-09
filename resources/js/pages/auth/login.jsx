import React, { useContext, useState } from "react";
import AuthServices from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { UserContext, useAuth } from "../../context/UserContext";


const Login = () => {
    const [login, setLogin] = useState('')
    const navigate = useNavigate();
    const {setUser} = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await AuthServices.auth(login);
        console.log('data', res)
        if (res.success) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="#">
                    <b>Highway Fighters</b>
                </a>
            </div>
            {/* <!-- /.login-logo --> */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Log in to start your session</p>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8"></div>
                            {/* <!-- /.col --> */}
                            <div className="col-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Log In
                                </button>
                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                    </form>
                </div>
                {/* <!-- /.login-card-body --> */}
            </div>
        </div>
    );
};

export default Login;
