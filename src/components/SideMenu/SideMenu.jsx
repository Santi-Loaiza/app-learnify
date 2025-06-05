import React, { useState } from 'react';
import '../SideMenu/SideMenu.css';
import { Link, useNavigate } from 'react-router-dom';
import { alertaRedireccion } from '../../helpers/funciones';

const SideMenu = () => {
  let navigate = useNavigate()
  let usuario = JSON.parse(localStorage.getItem("usuario"))
  function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion(navigate, "Sesion finalizada", "En Breves segundos cerraremos la sesión", "info", "/")
  }
  return (
    <div className="side-menu">
      <div className="menu-lateral">
        <ul>
          <Link to="/home/clases"><li><button><span>Clases</span></button></li></Link> 
          <Link to="/home/notas"><li><button><span>Notas</span></button></li></Link>
          <Link to="/home/matriculas"><li><button><span>Matrícula</span></button></li></Link>
          <Link to="/home/bienestar"><li><button><span>Bienestar</span></button></li></Link>
          <Link to="/home/beneficios"><li><button><span>Beneficios</span></button></li></Link>
          <button onClick={cerrarSesion} className='cerrar-sesion-button'><span>Cerrar sesion</span>
          </button>
        </ul>
        <img src="/public/logo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default SideMenu;