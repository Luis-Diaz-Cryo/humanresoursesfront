import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEmpleado() {

    let navigate = useNavigate();
    const { eid } = useParams();

    const [empleado, setEmpleado] = useState({
        id: undefined,
        nombre: "",
        direccion: "",
        telefono: undefined,
        cargo: ""
    });

    const { id, nombre, direccion, telefono, cargo } = empleado;

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/empleado/modi/${eid}`, empleado);
            navigate("/");
        } catch (error) {
            console.error("There was an error updating the employee!", error);
        }
    };

    const loadEmpleados = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/empleado/${eid}`);
            setEmpleado(result.data);
        } catch (error) {
            console.error("There was an error loading the employee data!", error);
        }
    };

    useEffect(() => {
        if (eid) {
            loadEmpleados();
        } else {
            console.error("No employee ID provided!");
        }
    }, [eid]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Empleado</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Id' className='form-label'>Id</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Id'
                                name="id"
                                value={id}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Nombre' className='form-label'>Name</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Name'
                                name="nombre"
                                value={nombre}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Direccion' className='form-label'>Direction</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Direction'
                                name="direccion"
                                value={direccion}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Telefono' className='form-label'>Phone Number</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Phone Number'
                                name="telefono"
                                value={telefono}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Cargo' className='form-label'>Charge</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Charge'
                                name="cargo"
                                value={cargo}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
