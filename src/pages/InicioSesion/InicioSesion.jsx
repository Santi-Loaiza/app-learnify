import { Link, useNavigate } from 'react-router-dom';
import './InicioSesion.css'
import { useEffect, useState } from 'react';
import { alertaError, alertaRedireccion, generarToken } from '../../helpers/funciones';
let apiUsuarios = "http://localhost:3000/usuarios";

const InicioSesion = () => {
    const [getUsuario, setUsuario] = useState("")
    const [getContrasena, setContrasena] = useState("")
    const [getHoraLogin, setHoraLogin] = useState(null)
    const [usuarios, setUsuarios] = useState([])
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
      (usuario) =>
        getUsuario == usuario.usuario && getContrasena == usuario.contrasena
    );
    return usuarioEncontrado;
  }

  function inicioSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      console.log(tokenAcceso)
      localStorage.setItem("token", tokenAcceso);
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(
        navigate,
        "Bienvenido/a " + buscarUsuario().nombre,
        "En breves segundos será redireccionado a la pagina principal",
        "success",
        "/MainView"
      );
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError("Error", "Contraseña y/o usuario incorrecto", "error");
    }
  }
    
  return (
        <section className='form-container-all'>
        <div className="form-box">
        <form className="form">
          <span className="title">Iniciar sesion</span>
          <span className="subtitle">Ingresa tus datos asignados para sacar el maximo provecho a learnify 🚀</span>
          <div className="form-container">
            <input 
            onChange={(e) => setUsuario(e.target.value)}
            type="text" className="input" placeholder="Usuario" />
            <input 
            onChange={(e) => setContrasena(e.target.value)}
            type="password" className="input" placeholder="Contraseña" />
          </div>
          <button type='button' onClick={inicioSesion}>Iniciar sesion</button>
        </form>
        <div className="form-section">
          <p>¿Aún no tienes una cuenta? <Link to="/registro">Crea una</Link> </p>
        </div>
      </div>
    </section>   
  )
}

export default InicioSesion
