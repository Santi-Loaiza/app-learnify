import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alertaRedireccion } from "../../../helpers/funciones";
let apiUsuarios = "http://localhost:3000/usuarios";

const EditarUsuario = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getNombre, setNombre] = useState("");
    const [getTipoUsuario, setTipoUsuario] = useState("")
    const [getFechaNacimiento, setFechaNacimiento] = useState("")
    const [getDireccion, setDireccion] = useState("")
    const [getTelefono, setTelefono] = useState("")
    let navigate = useNavigate()
    let { id } = useParams()

    function getUsuarioId() {
        fetch(apiUsuarios + "/" + id)
            .then((respose) => respose.json())
            .then((data) => {
                setUsuario(data.usuario);
                setContrasena(data.contrasena);
                setNombre(data.nombre);
                setTipoUsuario(data.tipoUsuario);
                setFechaNacimiento(data.datos_personales.fecha_nacimiento);
                setDireccion(data.datos_personales.direccion);
                setTelefono(data.datos_personales.telefono);
            });
    }
     useEffect(() => {
        getUsuarioId();
    }, []);

    function editarUsuario() {
        let nuevoUsuario = {
            tipoUsuario: getTipoUsuario,
            nombre: getNombre,
            usuario: getUsuario,
            contrasena: getContrasena,
            datos_personales: {
                fecha_nacimiento: getFechaNacimiento,
                direccion: getDireccion,
                telefono: getTelefono
            }
        };
        fetch(apiUsuarios + "/" + id, {
            method: "PATCH",
            body: JSON.stringify(nuevoUsuario),
        })
            .then(() => {
                alertaRedireccion(
                    navigate,
                    "Usuario editado correctamente",
                    "En breves segundos será redireccionado",
                    "success",
                    "/home/administrador-usuarios"
                );
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="form-box">
            <form className="form">
                <span className="title">Editar usuario</span>
                <span className="subtitle">Ingresa los datos a editar</span>
                <div className="form-container">
                    <select onChange={(e) => setTipoUsuario(e.target.value)}
                        className="input"
                        value={getTipoUsuario}
                    >
                        <option value="administrador">Administrador</option>
                        <option value="estudiante">Estudiante</option>
                        <option value="docente">Docente</option>
                    </select>
                    <input
                        onChange={(e) => setNombre(e.target.value)}
                        type="text" className="input" placeholder="Nombre Completo"
                        value={getNombre} />
                    <input
                        onChange={(e) => setUsuario(e.target.value)}
                        type="text" className="input" placeholder="Usuario"
                        value={getUsuario} />
                    <input
                        onChange={(e) => setContrasena(e.target.value)}
                        type="password" className="input" placeholder="Contraseña"
                        value={getContrasena} />
                    <div className="input-with-label">
                        <label> Fecha de nacimiento </label><input
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                            type="date" placeholder="Fecha de nacimiento"
                            value={getFechaNacimiento} />
                    </div>

                    <input
                        onChange={(e) => setDireccion(e.target.value)}
                        type="text" placeholder="Direccion" className="input"
                        value={getDireccion} />
                    <input
                        onChange={(e) => setTelefono(e.target.value)}
                        type="text" placeholder="Telefono" className="input"
                        value={getTelefono} />
                </div>
                <button type='button' onClick={editarUsuario} >Editar usuario</button>
            </form>
        </div>
    )
}

export default EditarUsuario
