import React from 'react';
import { Card, Layout, Button } from 'antd';
import {useParams, useNavigate} from 'react-router-dom'


const { Meta } = Card;
const {Content } = Layout;


const Detalle = ({detalle}) => {

        const navigate = useNavigate()
    const params = useParams()
    const {id} = params
 
    const buscarTarea = detalle.find(tarea => tarea.id === Number(id))
    console.log(buscarTarea)
    const {nombre, descripcion, imagen} = buscarTarea

    return (
        <div>
        <Content
        style={{ 
            margin: "10%",
            justifyContent:'center'
        }}>
        <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={imagen} />}
            >
                <Meta title={nombre} description={descripcion} />
                <Button onClick={() => navigate(-1)}>Atras</Button>
            </Card>
        </Content>
           
        </div>
    );
};

export default Detalle;