import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddPerfil() {

    let navigate = useNavigate()

    const [perfil, setPerfil] = useState({
        empId: undefined,
        habilidades: "",
        experencias: "",
        certificaciones: ""
        
    })

    const { empId, habilidades, experencias, certificaciones} = perfil

    const onInputChange = (e) => {
        setPerfil({ ...perfil, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localHost:8080/perfil", perfil)
        navigate("/")
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'> Register Perfil</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='EmpId' className='form-label'>
                                EmpId
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter employee Id'
                                name="empId"
                                value={empId}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Habilidades' className='form-label'>
                                Habilidades
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter abilities'
                                name="habilidades"
                                value={habilidades}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Experencias' className='form-label'>
                                Experencias
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Expiriences'
                                name="experencias"
                                value={experencias}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Certificaciones' className='form-label'>
                                Certificaciones
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Certificasions'
                                name="certificaciones"
                                value={certificaciones}
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
