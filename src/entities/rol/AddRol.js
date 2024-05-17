import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddRol() {

    let navigate = useNavigate()

    const [rol, setRol] = useState({
        nombre: "",
        responsibilidades: "",
    })

    const { nombre, responsibilidades} = rol

    const onInputChange = (e) => {
        setRol({ ...rol, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localHost:8080/role", rol)
        navigate("/")
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'> Register Rol</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Nombre' className='form-label'>
                                Name
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter name of the charge'
                                name="nombre"
                                value={nombre}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Responsibilidades' className='form-label'>
                                Responsibilities
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter abilities'
                                name="responsibilidades"
                                value={responsibilidades}
                                onChange={(e) => onInputChange(e)}
                            />
                        
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>

    )
}
