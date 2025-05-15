import React, { useEffect, useState } from "react";
import "./Materias.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";
let apiMaterias = "http://localhost:3000/materias"

const Materias = () => {
  const [materias, setMaterias] = useState([])

  const getMaterias = () => {
    fetch(apiMaterias)
    .then(response => response.json())
    .then(data => setMaterias(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {getMaterias()}, [])

  return (
    <section className="main-container">
      <SideMenu />
      <section className="main-container-content">
        <Header /> 
         <div className="materias-container">
      <h1 className="titulo">Clases</h1>
      <div className="grid-container">
        {
        materias?.map((materia) => {return(
          <div key={materia} className="card">
            <img src={materia.imagen} alt={materia.nombre} className="imagen" />
            <div className="contenido">
              <h2 className="nombre">{materia.nombre}</h2>
              <p className="texto">Docente: {materia.docente}</p>
              <p className="texto">Aula: {materia.aula}</p>
              <div className="barra-container">
                <div
                  className="barra"
                  style={{ width: `${materia.progreso}%`, backgroundColor: materia.color }}
                ></div>
              </div>
              <div className="footer-materia">
                <span className="porcentaje" style={{ color: materia.color }}>
                  {materia.progreso}%
                </span>
                <button
                  className="boton"
                  style={{ backgroundColor: materia.color }}
                >
                  Abrir
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
      </section>
     
    </section>
    
  );
};

export default Materias;