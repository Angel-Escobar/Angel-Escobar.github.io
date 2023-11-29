import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const BarraOscura = styled.div`
  background-color: black;
  `
  return (
    <div className='container'>
      <BarraOscura className="navbar navbar-expand-lg navbar-dark fixed-top">
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
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Sobre Mi <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleNavCollapse}>Contactame</a>
              </li>
            </ul>
          </div>
        </div>
      </BarraOscura>
    </div>
  );
};

export default Navbar;
