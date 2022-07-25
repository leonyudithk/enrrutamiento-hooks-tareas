import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { url } from '../helpers/url';
import {Link} from 'react-router-dom'

const Listar = () => {

    const [tarea, setTarea] = useState([])

    const getData = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        setTarea(data)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(()=>{
        getData()
    },[tarea])

    const handleEliminar = async (id)=>{
        try{
            const resp = await fetch(`${url}/${id}`,
             {method: "DELETE"})
           
        }
        catch(err){ console.log(err)}
    }
                
              

    const dataSource = tarea.map(t => ({
        ...t,
        key: t.id
    }))


    const columns = [
        {
            title: "Nombre",
            dataIndex: "nombre",
            key: "nombre"
        },
        {
            title: "Descripcion",
            dataIndex: "descripcion",
            key: "descripcion"
        },
        {
            title: "Imagen",
            dataIndex: "imagen",
            key: "imagen",
            render: data => (<img style={{width: "40px" }} src={data} alt=""/>)  
        },
        {
            title: "Detalle",
            key: "detalle",
            render: d =>(<button><Link to={`/detalle/${d.id}`}>Detalle</Link></button>)
        },
        {
            title: "Eliminar",
            key: "eliminar",
            render: d =>(<button onClick={()=>handleEliminar(d.id)}>Eliminar</button>)
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Listar;