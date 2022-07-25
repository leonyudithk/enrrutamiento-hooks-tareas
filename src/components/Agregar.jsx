import axios from 'axios';
import React from 'react';
import { uploadFile } from '../helpers/uploadFile';
import { url } from '../helpers/url';
import useForm from '../hooks/useFrom';

const Agregar = () => {

const {reset, data, handleChange, handleUploadImg} = useForm({
    nombre: " ",
    descripcion: " ",
    imagen: " "
});

    const handleSubmit = (e) => {
        e.preventDefault()
      axios.post(url, data)
      .then(()=> reset())
       
    }

const handleImagen = ({target}) => {
    const file = target.files[0]
    uploadFile(file)
    .then(resp=> handleUploadImg(resp))

}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la Tarea"
                    name="nombre"
                    value={data.nombre}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Descripción de la Tarea"
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                     />
                
                <input type="file" name="imagen"  onChange={handleImagen}/>

                <button type="submit"  >Enviar</button>
            </form>

        </div>
    );
};

export default Agregar;