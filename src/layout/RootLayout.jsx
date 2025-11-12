import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/nav/Navbar';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;