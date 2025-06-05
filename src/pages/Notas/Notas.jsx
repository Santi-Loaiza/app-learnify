import React, { useEffect, useState } from "react";
import "./Notas.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";

const notas = [
  {
    materia: "Biología",
    notas: [4.1, 4.5, 4.8, 3.9],
    final: 4.3,
  },
  {
    materia: "Matemáticas",
    notas: [3.8, 4.2, 4.1, 3.5],
    final: 3.9,
  },
  {
    materia: "Lengua Castellana",
    notas: [3.0, 3.7, 3.6, 4.0],
    final: 3.5,
  },
  {
    materia: "Sociales",
    notas: [2.9, 3.6, 3.5, 3.4],
    final: 3.3,
  },
  {
    materia: "Inglés",
    notas: [4.5, 4.1, 4.8, 5.0],
    final: 4.6,
  },
  {
    materia: "Filosofía",
    notas: [3.6, 4.0, 4.3, 3.7],
    final: 3.9,
  },
];

const Notas = () => {
  return (
        <div className="notas-container">
          <h1 className="titulo">Mis Notas</h1>
          <table className="tabla-notas">
            <thead>
              <tr>
                <th>Materia</th>
                <th>Primer periodo</th>
                <th>Segundo periodo</th>
                <th>Tercer periodo</th>
                <th>Cuarto periodo</th>
                <th>Nota final</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((item, index) => (
                <tr key={index}>
                  <td>{item.materia}</td>
                  {item.notas.map((n, i) => (
                    <td key={i}>{n}</td>
                  ))}
                  <td>{item.final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
};

export default Notas;