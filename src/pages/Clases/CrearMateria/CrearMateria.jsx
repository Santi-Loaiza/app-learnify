import { useEffect, useState } from 'react'
import './CrearMateria.css'
import { alertaRedireccion } from '../../../helpers/funciones'
import { useNavigate } from 'react-router-dom'
let apiMaterias = "http://localhost:3000/materias"
const CrearMateria = () => {
    const [materias, setMaterias] = useState([])
    const [nombre, setNombre] = useState("")
    const [docente, setDocente] = useState("")
    const [aula, setAula] = useState("")
    const [color, setColor] = useState("")
    const [imagenUrl, setImagenUrl] = useState("")
    let navigate = useNavigate()

    // Obtener usuario de forma segura
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null")

    const getMaterias = () => {
        fetch(apiMaterias)
            .then(response => response.json())
            .then(data => setMaterias(data))
            .catch(error => console.log(error))
    }

    useEffect(() => { getMaterias() }, [])

    function registrarMateria() {
        let nuevaMateria = {
            nombre: nombre,
            docente: docente,
            aula: aula,
            color: color,
            progreso: 0,
            imagen: imagenUrl
        };
        fetch(apiMaterias,
            {
                method: "POST",
                body: JSON.stringify(nuevaMateria),
            }
        )
        alertaRedireccion(
            navigate,
            "Materia registrada correctamente",
            "En breves segundos será redireccionado al Inicio de sesion",
            "success",
            "/home/clases"
        );
    }
    return (
        <div className='crear-materia-container'>
            <div className="form-box">
                <form className="form">
                    <span className="title">Registra una nueva materia</span>
                    <span className="subtitle">Ingresa los datos correspondientes para crear una nueva materia.</span>
                    <div className="form-container">
                        <input
                            onChange={(e) => setNombre(e.target.value)}
                            type="text" className="input" placeholder="Nombre de la materia"

                        />
                        <input
                            onChange={(e) => setDocente(e.target.value)}
                            type="text" className="input" placeholder="Nombre del docente"

                        />
                        <input
                            onChange={(e) => setAula(e.target.value)}
                            type="text" className="input" placeholder="Aula"

                        />
                        <div className="input-with-label">
                            <label> Color de materia </label><input
                                onChange={(e) => setColor(e.target.value)}
                                type="color" placeholder="color"

                            />
                        </div>
                        <div className="input-with-label input-pixabay">
                            <label> Imagen de la materia
                                <p>Ingresa a pixabay, copia y pega la url de la imagen</p> <a target='_blank' href="https://pixabay.com/es/">Pagina pixabay</a> </label><input
                                onChange={(e) => setImagenUrl(e.target.value)}
                                type="url" placeholder="urlImagen"

                            />
                        </div>
                    </div>
                    <button type='button' onClick={registrarMateria} >Agregar Materia</button>
                </form>
            </div>
        </div>
    )
}

export default CrearMateria
