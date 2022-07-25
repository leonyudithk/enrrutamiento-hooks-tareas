import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Home from '../containers/Home';


const AppRouters = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouters;