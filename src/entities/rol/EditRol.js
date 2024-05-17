import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditRol() {

    let navigate = useNavigate()

    const { nomRol } = useParams();

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
        await axios.put(`http://localHost:8080/role/modi/${nomRol}`, rol)
        navigate("/")
    };

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
                    <h2 className='text-center m-4'> Register Rol</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
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
