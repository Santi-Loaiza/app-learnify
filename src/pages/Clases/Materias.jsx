import React, { useEffect, useState } from "react";
import "./Materias.css";
import { alertaConfirmacionEliminarMateria } from "../../helpers/funciones";
import { Link } from "react-router-dom";
let apiMaterias = "http://localhost:3000/materias"

const Materias = () => {
  const [materias, setMaterias] = useState([])

  // Obtener usuario de forma segura
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null")

  const getMaterias = () => {
    fetch(apiMaterias)
      .then(response => response.json())
      .then(data => setMaterias(data))
      .catch(error => console.log(error))
  }

  useEffect(() => { getMaterias() }, [])

  // Eliminar materia
    const eliminarMateria = (id) => {
        alertaConfirmacionEliminarMateria(id, apiMaterias, getMaterias);
    };

  if (usuario.tipoUsuario == "administrador") return (
        <div className="materias-container">
          <h1 className="administrador-materias-title">Gestiona las clases y materias</h1>
          <div className="container-button-agregar-materia">
            <Link to="/home/clases/crear"> <button className="button-agregar-materia">+ Agregar Materia</button> </Link>
          </div>
            <section className="container-table-materias">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Materia</th>
                                    <th>Docente</th>
                                    <th>Aula</th>
                                    <th>Color</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materias.length === 0 ? (
                                    <tr>
                                        <td colSpan="8">Cargando o sin materias</td>
                                    </tr>
                                ) : (
                                    materias.map((materia) => (
                                        <tr className="materia-tr" key={materia.id}>
                                            <td>{materia.id}</td>
                                            <td>{materia.nombre}</td>
                                            <td>{materia.docente}</td>
                                            <td>{materia.aula}</td>
                                            <td className="td-materia-color">{materia.color}<div className="color-materia-td" style={{backgroundColor: `${materia.color}`}}></div></td>
                                        
                                            <td>
                                                <Link className="link-editar-materia" to={"/home/clases/editar/"+materia.id}> <button className="editar-usuario-button" >Editar</button> </Link>
                                                <button className="eliminar-usuario-button" onClick={() => eliminarMateria(materia.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </section>
        </div>
  )

  return (
        <div className="materias-container">
          <h1 className="titulo">Clases</h1>
          <div className="grid-container">
            {
              materias?.map((materia) => {
                return (
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
                )
              })}
          </div>
        </div>
  );
};

export default Materias;