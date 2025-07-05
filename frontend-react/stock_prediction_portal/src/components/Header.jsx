import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='navbar container py-3 align-items-start'>
                 <Link className='navbar-brand text-light' to={"/"}>Stock Prediction portak</Link>

                 <div>
                    <Link to={'/login'} className='btn btn-outline-info me-2 text-light'>Login</Link>
                    <Link to={'/register'} className='btn btn-info text-light'>Register</Link>
                 </div>
            </div>
        </>
    );
};

export default Header;