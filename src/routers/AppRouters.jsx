import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Detalle from '../components/Detalle';
import Listar from '../components/Listar';
import NavBar from '../components/NavBar';
import Home from '../containers/Home';
import { url } from '../helpers/url';


const AppRouters = () => {

    const [tarea, setTarea] = useState([])

    const cargarData = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        setTarea(data)
    }

    useEffect(() => {
        cargarData()
    }, [])

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<Listar/>} />
                    <Route path="/detalle/:id" element={<Detalle detalle={tarea}/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouters;