import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link , useParams} from 'react-router-dom';

export default function ViewEmpleado() {

    const [empleado,setEmpleado]=useState({
        id: undefined,
        nombre: "",
        direccion: "",
        telefono: undefined,
        cargo: ""
    })

    const { eid } = useParams();

    useEffect(()=>{
        loadEmpleados()
    },[])   
    
    const loadEmpleados= async ()=>{
        const result = await axios.get(`http://localhost:8080/empleado/${eid}`)
        setEmpleado(result.data)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Details</h2>
                <div className='card'>
                    <div className='card-header'>
                    Details of Empleado
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Id:</b>
                            {empleado.id}
                        </li>
                        <li className='list-group-item'>
                            <b>Name:</b>
                            {empleado.nombre}
                        </li>
                        <li className='list-group-item'>
                            <b>Direction:</b>
                            {empleado.direccion}
                        </li>
                        <li className='list-group-item'>
                            <b>Phone Number:</b>
                            {empleado.telefono}
                        </li>
                        <li className='list-group-item'>
                            <b>Charge:</b>
                            {empleado.cargo}
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
