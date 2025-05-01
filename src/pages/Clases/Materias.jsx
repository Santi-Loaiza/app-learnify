import React from "react";
import "./Materias.css";

const materias = [
  {
    nombre: "Matematicas",
    docente: "Miguel Angel Aristizabal",
    aula: "201",
    progreso: 25,
    color: "red",
    imagen: "",
  },
  {
    nombre: "Lengua Castellana",
    docente: "Jorge Castillon",
    aula: "104",
    progreso: 50,
    color: "yellow",
    imagen: "https://via.placeholder.com/400x200?text=Lengua",
  },
  {
    nombre: "Sociales",
    docente: "Martha Cristina Lopez",
    aula: "203",
    progreso: 10,
    color: "blue",
    imagen: "https://via.placeholder.com/400x200?text=Sociales",
  },
  {
    nombre: "Ingles",
    docente: "Marcela Marroquin",
    aula: "202",
    progreso: 75,
    color: "purple",
    imagen: "https://via.placeholder.com/400x200?text=Ingles",
  },
  {
    nombre: "Biologia",
    docente: "Doris Quinto",
    aula: "102",
    progreso: 20,
    color: "green",
    imagen: "https://via.placeholder.com/400x200?text=Biologia",
  },
  {
    nombre: "Filosofia",
    docente: "Andres Ciro",
    aula: "103",
    progreso: 0,
    color: "gray",
    imagen: "https://via.placeholder.com/400x200?text=Filosofia",
  },
];

const Materias = () => {
  return (
    <div className="materias-container">
      <h1 className="titulo">CLASES</h1>
      <div className="grid-container">
        {materias.map((materia, index) => (
          <div key={index} className="card">
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
              <div className="footer">
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
        ))}
      </div>
    </div>
  );
};

export default Materias;