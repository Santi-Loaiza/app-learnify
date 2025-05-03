import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Registro.css'
import { alertaError, alertaRedireccion } from "../../helpers/funciones";
let apiUsuarios = "http://localhost:3000/usuarios";

const Registro = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getNombre, setNombre] = useState("");
    const [getTipoUsuario, setTipoUsuario] = useState("")
    const [getFechaNacimiento, setFechaNacimiento] = useState("")
    const [getDireccion, setDireccion] = useState("")
    const [getTelefono, setTelefono] = useState("")
    const [getHoraRegistro, setHoraRegistro] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    let navigate = useNavigate();
  
    function getUsuarios() {
      fetch(apiUsuarios)
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.log(error));
    }
    useEffect(() => {
      getUsuarios();
    }, []);
  
    function buscarUsuario() {
      let usuarioEncontrado = usuarios.find(
        (usuario) => getUsuario == usuario.usuario
      );
      return usuarioEncontrado;
    }
  
    function registrarUsuario() {
      if (!buscarUsuario()) {
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
        fetch(apiUsuarios, {
          method: "POST",
          body: JSON.stringify(nuevoUsuario),
        });
        alertaRedireccion(
          navigate,
          "El usuario registrado correctamente",
          "En breves segundos será redireccionado al Inicio de sesion",
          "success",
          "/"
        );
        let horaInicio = new Date();
        console.log(horaInicio);
        // setHoraLogin(horaInicio)
        // console.log(getHoraLogin);
      } else {
        alertaError("Error", "Usuario ya existe en la base de datos", "error");
      }
    }
  
  return (
    <section className='form-container-all'>
        <div className="form-box">
        <form className="form">
          <span className="title">Registro</span>
          <span className="subtitle">Ingresa los datos correspondientes para crear el usuario</span>
          <div className="form-container">
            <select onChange={(e) => setTipoUsuario(e.target.value)}
             className="input"
            >
                <option value="administrador">Administrador</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
            </select>
            <input 
            onChange={(e) => setNombre(e.target.value)}
            type="text" className="input" placeholder="Nombre Completo" />
            <input 
            onChange={(e) => setUsuario(e.target.value)}
            type="text" className="input" placeholder="Usuario" />
            <input 
            onChange={(e) => setContrasena(e.target.value)}
            type="password" className="input" placeholder="Contraseña" />
            <div className="input-with-label">
                <label> Fecha de nacimiento </label><input 
            onChange={(e) => setFechaNacimiento(e.target.value)}
            type="date" placeholder="Fecha de nacimiento"/>
            </div>
            
            <input 
            onChange={(e) => setDireccion(e.target.value)}
            type="text" placeholder="Direccion" className="input" />
            <input 
            onChange={(e) => setTelefono(e.target.value)}
            type="text" placeholder="Telefono" className="input"/>
          </div>
          <button type='button' onClick={registrarUsuario}>Registrar</button>
        </form>
        <div className="form-section">
          <p>¿Ya tienes una cuenta? <Link to="/">Click aquí</Link> </p>
        </div>
      </div>
    </section>  
  )
}

export default Registro
