import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Foot from './Foot';

const Layout = () => {
    return (
        <div className='container'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Layout;