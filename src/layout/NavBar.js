import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                    Gestion De Recursos Humanos
                    </Link>
                    <button 
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className='btn btn-outline-light' to="addEmpleado">Add Empleado</Link>
                    <Link className='btn btn-outline-light' to="addPerfil">Add Perfil</Link>
                    <Link className='btn btn-outline-light' to="addEmpleado">Add Rol</Link>
                </div>
            </nav>


        </div>
    )
}
