import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [Empleados, setEmpleados] = useState([])
    const [Perfiles, setPerfiles] = useState([])
    const [Roles, setRoles] = useState([])

    useEffect(() => {
        loadEmpleados();
        loadPerfiles();
        loadRoles();
    }, [])

    const loadEmpleados = async () => {
        const result = await axios.get("http://localhost:8080/empleados")
        setEmpleados(result.data)
    }

    const loadPerfiles = async () => {
        const result = await axios.get("http://localHost:8080/perfiles")
        setPerfiles(result.data)
    }
    const loadRoles = async () => {
        const result = await axios.get("http://localHost:8080/roles")
        setRoles(result.data)

    }

    const deleteEmpleado = async (id) => {
        await axios.delete(`http://localhost:8080/empleado/borrar/${id}`)
        loadEmpleados()
    }

    const deletePerfil = async (empId) => {
        await axios.delete(`http://localhost:8080/perfil/borrar/${empId}`)
        loadPerfiles()
    }
    const deleteRol = async (nombre) => {
        await axios.delete(`http://localHost:8080/role/borrar/${nombre}`)
        loadRoles()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h2>Empleados</h2>
                <table className="table border shadow" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Empleados.map((empleado, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{empleado.id}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.direccion}</td>
                                    <td>{empleado.telefono}</td>
                                    <td>{empleado.cargo}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewEmpleado/${empleado.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editEmpleado/${empleado.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteEmpleado(empleado.id)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>

            <div className='py-4'>
                <h2>Perfil</h2>
                <table className="table border shadow" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">EmpId</th>
                            <th scope="col">Habilidades</th>
                            <th scope="col">Experencias</th>
                            <th scope="col">Certificaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Perfiles.map((perfil, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{perfil.empId}</td>
                                    <td>{perfil.habilidades}</td>
                                    <td>{perfil.experencias}</td>
                                    <td>{perfil.certificaciones}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewPerfil/${perfil.empId}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editPerfil/${perfil.empId}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deletePerfil(perfil.empId)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>
            <div className='py-4'>
                <h2>Roles</h2>
                <table className="table border shadow" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Responsibilidades</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Roles.map((rol, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{rol.nombre}</td>
                                    <td>{rol.responsibilidades}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewRol/${rol.nombre}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editRol/${rol.nombre}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteRol(rol.nombre)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>



        </div>
    )
}
