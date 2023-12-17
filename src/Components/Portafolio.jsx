import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { BsArrowRightShort } from 'react-icons/bs';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portafolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const CardInfo = styled.div`
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  `;

  const cardsData = [
    { id: 1, title: 'Imágenes Publicitarias', text: 'Descripcion', imageSrc: 'https://via.placeholder.com/150?text=Card+1' },
    { id: 2, title: 'Producción de Video', text: 'Descripcion', imageSrc: 'https://via.placeholder.com/150?text=Card+2' },
    { id: 3, title: 'Fotografía Profesional', text: 'Descripcion', imageSrc: 'https://via.placeholder.com/150?text=Card+3' },
    { id: 4, title: 'Campañanas Publicitarias ', text: 'Descripcion', imageSrc: 'https://via.placeholder.com/150?text=Card+4' },
  ];

  return (
    <Container className="w-75">
      <h1 className='text-center mb-4'>Soluciones Digitales a la Medida</h1>
      <Row className="d-none d-sm-flex">
        {cardsData.map((card) => (
          <Col key={card.id}>
            <CardInfo
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCardClick(card)}
            >
              <img src={card.imageSrc} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <BsArrowRightShort size={40} />
            </CardInfo>
          </Col>
        ))}
      </Row>

      {/* Carrusel para dispositivos móviles */}
      <Carousel className="d-sm-none">
        {cardsData.map((card) => (
          <div key={card.id}>
            <CardInfo onClick={() => handleCardClick(card)}>
              <img src={card.imageSrc} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <BsArrowRightShort size={40} />
            </CardInfo>
          </div>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <>
              <p>{selectedCard.text}</p>
              {/* Agrega aquí cualquier otra información adicional que desees mostrar en el modal */}
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portafolio;
