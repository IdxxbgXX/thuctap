import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../redux/actions/authAction';
import './Login.scss';

function Register() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');



    const dispatch = useDispatch();
    const { error } = useSelector(state => state.authRegister);

    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    }

    const handleChangePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }
    const handleChangeName = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {};
        if (avatar !== "") {
            formData = {
                name: name,
                email: email,
                password: password,
                avatar: avatar
            }

            try {
                dispatch(register(formData));
                if (!error && error !== "") {
                    toast.success('Register on Successfully!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setName("");
                    setPassword("");
                    setEmail("");
                    setAvatar(avatarPreview);
                }


            } catch (e) {
                console.log(e);
            }
        } else {
        }


    }


    const hangelOnChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <section className="login container-fluid">
            <h1 className="login-title text-center">Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="inputUser" className="input-title">Name</label>
                    <input
                        type="text"
                        value={name}
                        className="form-control login-input"
                        id="inputUser"
                        placeholder="Password"
                        onChange={handleChangeName}
                    />
                </div>
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
                <label className="input-title">Choose Avatar</label>
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            name="avatar"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={hangelOnChange}
                        />
                        <label className="custom-file-item" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <div className="choose-avartar">
                    <img src={avatarPreview} alt="" />
                </div>
                <p className="error">{error ? error : ''}</p>
                <button
                    type="submit"
                    className="btn btn-primary btn-login"
                    onClick={handleSubmit}
                >
                    sign up
                </button>
                <div className="">
                    <span>Have an account.</span>
                    <Link to="/login">Sign in</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;