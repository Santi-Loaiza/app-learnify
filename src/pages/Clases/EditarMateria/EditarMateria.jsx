import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { alertaRedireccion } from "../../../helpers/funciones"
let apiMaterias = "http://localhost:3000/materias"
const EditarMateria = () => {
    const [nombre, setNombre] = useState("")
    const [docente, setDocente] = useState("")
    const [aula, setAula] = useState("")
    const [color, setColor] = useState("")
    let navigate = useNavigate()
    let { id } = useParams()
    const getMateriaId = () => {
        fetch(apiMaterias + "/" + id)
            .then(response => response.json())
            .then(data => {
                setNombre(data.nombre);
                setDocente(data.docente);
                setAula(data.aula);
                setColor(data.color);
            }
        )
            .catch(error => console.log(error))
    }

    useEffect(() => { getMateriaId() }, [])

        function editarMateria() {
            let nuevaMateria = {
                nombre: nombre,
                docente: docente,
                aula: aula,
                color: color,
            };
            fetch(apiMaterias + "/" + id, {
                method: "PATCH",
                body: JSON.stringify(nuevaMateria),
            })
                .then(() => {
                    alertaRedireccion(
                        navigate,
                        "Materia editada correctamente",
                        "En breves segundos será redireccionado",
                        "success",
                        "/home/clases"
                    );
                })
                .catch((error) => console.log(error));
        }
    return (
        <div>
            <div className="form-box">
                <form className="form">
                    <span className="title">Editar Materia</span>
                    <span className="subtitle">Ingresa los datos a editar</span>
                    <div className="form-container">
                        <input
                            onChange={(e) => setNombre(e.target.value)}
                            type="text" className="input" placeholder="Nombre de la materia"
                            value={nombre}
                        />
                        <input
                            onChange={(e) => setDocente(e.target.value)}
                            type="text" className="input" placeholder="Nombre del docente"
                            value={docente}
                        />
                        <input
                            onChange={(e) => setAula(e.target.value)}
                            type="text" className="input" placeholder="Aula"
                            value={aula}
                        />
                        <div className="input-with-label">
                            <label> Color de materia </label><input
                                onChange={(e) => setColor(e.target.value)}
                                type="color" placeholder="color"
                                value={color}
                            />
                        </div>
                        </div>
                    <button type='button' onClick={editarMateria} >Editar usuario</button>
                </form>
            </div>
        </div>
    )
}

export default EditarMateria
