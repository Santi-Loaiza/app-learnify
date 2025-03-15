import React, { useState } from 'react';
import './SideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-menu">
      <button className="open-btn" onClick={toggleMenu}>
        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>

      <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Clases</li>
          <li>Notas</li>
          <li>Matrículas</li>
          <li>Bienestar</li>
          <li>Beneficios</li>
          <li>Becas</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;