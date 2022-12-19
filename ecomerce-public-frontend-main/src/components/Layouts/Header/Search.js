import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

import { logout } from '../../../redux/actions/authAction';
function Search() {
    const [searchValue, setSearchValue] = useState('');


    const { isAuthenticated, loading, user } = useSelector(state => state.authLogin);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const dispatch = useDispatch();
    console.log(user)
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleLogout = () => {
        dispatch(logout());
        removeCookie('token', { path: '/' });
    }
    const userMenu = [
        {
            icon: <i className="fa-solid fa-user"></i>,
            title: "View Profile",
            to: '/profile'
        },
        {
            icon: <i className="fa-solid fa-gears"></i>,
            title: "Settings",
            to: '/settings'
        },
        {
            icon: <i className="fa-solid fa-right-long"></i>,
            title: "Log out",
            to: '/logout',
            handle: handleLogout
        }
    ]

    return (
        <>
            <section className="search">
                <div className="container">
                    <div className="row">
                        <Link to="/" className="col-2">
                            <img src="./images/logo.png" className="img-thumbnail" width="50px" alt="" />
                        </Link>
                        <div className="col-7 search-box d-none d-flex">
                            <i className='fa fa-search search-icon'></i>
                            <input
                                value={searchValue}
                                type='text'
                                placeholder='Search and hit enter...'
                                onChange={handleChange}
                            />
                            <span className="search-category">All Category</span>
                        </div>
                        <div className="col cart d-flex justify-content-end">
                            <div className='header-icon d-flex justify-content-center align-items-center'>
                                {isAuthenticated && loading ?
                                    <div className="user-login">
                                        <img src={user && user.avatar.url} alt="" />
                                        <div className="user-sublist">
                                            {userMenu.map((item, index) => {
                                                return (
                                                    <Link to={item.to} className="user-sublist-item">
                                                        <span>{item.icon}</span>
                                                        <p onClick={item.handle && item.handle}>{item.title}</p>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    :
                                    <Link to='/login'>
                                        <i className='fa fa-user icon-circle'></i>
                                    </Link>
                                }

                                <div className='cart'>
                                    <Link to='/cart'>
                                        <i className='fa fa-shopping-bag icon-circle'></i>
                                        {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;