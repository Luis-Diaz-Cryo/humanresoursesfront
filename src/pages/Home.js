import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
    
    const [Empleados,setEmpleados] = useState([])

    useEffect(()=>{
        loadEmpleados();
    },[])

    const loadEmpleados = async()=>{
         const result= await axios.get("http://localhost:8080/empleados")
         setEmpleados(result.data)
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
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
                        Empleados.map((empleado,index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.direccion}</td>
                            <td>{empleado.telefono}</td>
                            <td>{empleado.cargo}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <Link className='btn btn-outline-primary mx-2' to={`/editEmpleado/${empleado.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2'>Delete</button>
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
