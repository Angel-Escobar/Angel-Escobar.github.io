import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <p className="mb-0">&copy; 2023 Agencia Crece Digital. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
