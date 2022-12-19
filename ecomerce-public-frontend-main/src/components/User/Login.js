import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../redux/actions/authAction';
import './Login.scss';

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { isAuthenticated, loading } = useSelector(state => state.authLogin);
    const redirect = location.search ? location.search.split("=")[1] : "/";
    useEffect(() => {
        if (isAuthenticated) {
            history.push(redirect);
        }
    }, [isAuthenticated])
    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    }

    const handleChangePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }
    return (
        <section className="login container-fluid">
            <h1 className="login-title text-center">Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="input-title">Email address</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control login-input"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChangeEmail}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="input-title">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="form-control login-input"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={handleChangePassword}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-login"
                    onClick={handleSubmit}
                >
                    sign in
                </button>
                <div className="">
                    <span>Don't have an account.</span>
                    <Link to="/register">Sign up</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;