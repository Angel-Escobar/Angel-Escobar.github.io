import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState('rgba(255, 255, 255, 0)');

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Cambiar el fondo de la barra de navegación basándonos en la posición de desplazamiento
      if (scrollPosition > 100) {
        setNavbarBackground('#ffffff'); // Cambiar a blanco si el desplazamiento es más de 100px
      } else {
        setNavbarBackground('rgba(255, 255, 255, 0)'); // Mantener transparente si el desplazamiento es inferior a 100px
      }
    };

    // Agregar el evento de escucha al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const BarraNav = styled.nav`
    background-color: ${navbarBackground};
    backdrop-filter: blur(10px); /* Opcional: Agrega desenfoque al fondo */
    transition: background-color 0.3s ease; /* Agregar transición suave al cambio de color de fondo */
    border-radius: 25px;
    padding: 5px;
    margin-top: 5px;
    transition: .2s;
  `;

  return (
    <div className=''>
      <BarraNav className="container navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Portafolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Contactame</a>
              </li>
            </ul>
          </div>
        </div>
      </BarraNav>
    </div>
  );
};

export default Navbar;

