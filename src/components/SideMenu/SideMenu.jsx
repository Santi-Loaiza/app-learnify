import React, { useState } from 'react';
import '../SideMenu/SideMenu.css';

const SideMenu = () => {
  return (
    <div className="side-menu">

      <div className="menu-lateral">
        <ul>
          <li>Clases</li>
          <li>Notas</li>
          <li>Matrículas</li>
          <li>Bienestar</li>
          <li>Beneficios</li>
        </ul>
        <img src="./logo.png" alt="Logo" className="logo" />
        </div>
    </div>
  );
};

export default SideMenu;