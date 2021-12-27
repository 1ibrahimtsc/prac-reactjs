import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="">logo</div>
            <div>
                <ul>
                    <li><Link to="/" href="#" >Home</Link></li>
                    <li><Link to="/users" >Users</Link></li>
                    <li><Link to="/about" href="#" >About</Link></li>
                    <li><Link to="/posts" href="#" >Posts</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;