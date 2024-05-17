import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link , useParams} from 'react-router-dom';

export default function ViewPerfil() {

    const [perfil, setPerfil] = useState({
        empId: undefined,
        habilidades: "",
        experencias: "",
        certificaciones: ""
        
    })

    const { emId } = useParams();

    useEffect(() => {
        if (emId) {
            loadPerfil();
            console.log(emId)
        } else {
            console.error("No perfil ID provided!");
        }
    }, [emId]);  
    
    const loadPerfil = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/perfil/${emId}`);
            setPerfil(result.data);
        } catch (error) {
            console.error("There was an error loading the perfil data!", error);
        }
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Perfil Detials</h2>
                <div className='card'>
                    <div className='card-header'>
                    Details of Perfil
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Employee Id:</b>
                            {perfil.empId}
                        </li>
                        <li className='list-group-item'>
                            <b>abilities:</b>
                            {perfil.habilidades}
                        </li>
                        <li className='list-group-item'>
                            <b>Expiriences:</b>
                            {perfil.experencias}
                        </li>
                        <li className='list-group-item'>
                            <b>Certificaciones:</b>
                            {perfil.certificaciones}
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
