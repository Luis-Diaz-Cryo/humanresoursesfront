import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewRol() {

    let navigate = useNavigate()

    const { nomRol } = useParams();

    const [rol, setRol] = useState({
        nombre: "",
        responsibilidades: "",
    })

    const loadRol = async () => {
        try {
            const result = await axios.get(`http://localHost:8080/role/${nomRol}`);
            setRol(result.data);
        } catch (error) {
            console.error("There was an error loading the rol data!", error);
        }
    };

    useEffect(() => {
        if (nomRol) {
            loadRol();
            console.log(nomRol)
        } else {
            console.error("No Rol ID provided!");
        }
    }, [nomRol]);


    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Perfil Detials</h2>
                <div className='card'>
                    <div className='card-header'>
                    Details of Rol
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Rol Name:</b>
                            {rol.nombre}
                        </li>
                        <li className='list-group-item'>
                            <b>abilities:</b>
                            {rol.responsibilidades}
                        </li>
                    </ul>
                    </div>

                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Home</Link>
            </div>
        </div>
       </div>  
  );
}
