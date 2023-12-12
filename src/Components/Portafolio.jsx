import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

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

  const CardInfo = styled(motion.div)`
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
    { id: 1, title: 'Card 1', text: 'Description for Card 1', imageSrc: 'https://via.placeholder.com/150?text=Card+1' },
    { id: 2, title: 'Card 2', text: 'Description for Card 2', imageSrc: 'https://via.placeholder.com/150?text=Card+2' },
    { id: 3, title: 'Card 3', text: 'Description for Card 3', imageSrc: 'https://via.placeholder.com/150?text=Card+3' },
    { id: 4, title: 'Card 4', text: 'Description for Card 4', imageSrc: 'https://via.placeholder.com/150?text=Card+4' },
  ];

  return (
    <Container className="w-75">
      <h1 className='text-center mb-4'>Soluciones Digitales a la Medida</h1>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {cardsData.map((card) => (
          <Col key={card.id}>
            <CardInfo
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => handleCardClick(card)}
            >
              <h4>{card.title}</h4>
              <Card.Img variant="top" src={card.imageSrc} />
              <p>{card.text}</p>
            </CardInfo>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <>
              <p>{selectedCard.text}</p>
              <img src={selectedCard.imageSrc} alt={selectedCard.title} />
              {/* Agrega aquí cualquier otra información adicional que desees mostrar en el modal */}
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portafolio;
