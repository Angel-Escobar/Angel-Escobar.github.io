import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { BsArrowRightShort, BsCameraReels, BsFilm, BsCamera, BsShop, BsPerson, BsTwitter } from 'react-icons/bs';
import ContactoButton from './ContactoButton';
import { Link, useHistory } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const history = useHistory();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
    history.push('/ruta-de-contacto');
  };

  const TitPrin = styled.h1`
    color: #242E66;
  `;

  const TitSec = styled.h4`
    color: #242e66;
  `;

  const CardInfo = styled.div`
    background-color: transparent;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      transition: 0.2s;
      color: black;
    }
  `;

  const cardsData = [
    { id: 1, title: 'Imágenes Publicitarias', 
    text: 'Una forma rápida de impactar a tu audiencia', 
    icon: <BsCameraReels size={60} />,
    modalList: ['Establecemos tu objetivo', 'Definiremos las dimensiones', 'Presentamos una Propuesta', 'Corregimos la propuesta a tu gusto', 'Entregamos tus archivos finales'],
    modalText: 'Con este paquete puedes presentar tus productos o servicios en una serie de imagenes creativas relacionadas entre sí, con un mensaje escrito y una ilustracion de éste' },

   { id: 2, title: 'Producción de Video', 
   text: 'La gente no conoce el negocio como tú.', 
   icon: <BsFilm size={60}/>,
   modalText:'Los videos son una herramienta de comunicación audivisual muy efectiva para presentar información compleja de manera atrtactiva y fácil de entender sobre tu producto o servicio. Además, puedes crear una comunidad de seguidores de calidad en tus redes sociales, con personas que comparten los gustos e intereses de tu marca. Al comparir tus conocimientos generas un acercamiento con las personas para crear lazos de confianza hacia tus productos o servicios ',
   modalList: ['Definiremos el oobjetivo del video (Vender o Generar Confianza)', 'Visittaremos tus instalaciones para grabar', 'Presentamos una propuesta del video', 'Corregiremos a tu gusto', 'Entregaremos tu archivo final en alta definicion'] },

   { id: 3, title: 'Fotografía Profesional', 
    text: 'Imagenes que representan cada rasgo del producto',
    icon: <BsCamera size={60}/>,
   modalText: 'Con este paquete fotográfico profesional, obtendrás imágenes de tus productos en un fondo de color sólido o acompañado con elementos reales acorde a tu producto',
   modalList: ['Recibiremos tus productos', 'Presenttaremos una propuesta', 'Corregiremos la propuesta a tu gusto', 'Entregaremos tus archivos finales', 'Devolveremos tus productos'] },

   { id: 4, title: 'Ventas en Redes Sociales ', 
   text: 'Acercate mas a la desicion de compra', 
   icon: <BsShop size={60}/> ,
   modalText: 'Nos encargaremos de promocionar tus productos o servicios en las redes sociales de tu marca: Facebook e Instagram, con el objetivo de generar conversaciones con clientes potenciales por medio de Messenger, Instagram y/o WhatsApp, por mensaje directo o comentarios. Buscando conversaciones con nuevos clientes potenciales y llegando a clientes existentes que ya te enviaron mensaje con la intensión de incentivar a una nueva conversación y/o continuar con la existente.',
   modalList: ['Definiremos tus objetivos (Mensajes o Comentarios)', 'Esableceremos un presupuesto publicitario', 'Gestionaremos los permisos necesarios', 'Crearemos las campañas necesarias', 'Reportaremos los resultados al finalizar cada campaña de prueba', 'Optimizaremos los anuncios de cada campaña ganadora']},

   { id: 5, title: 'Ventas de Tienda en Linea ', 
   text: 'Buscamos conversiones con clientes potenciales', 
   icon: <BsPerson size={60}/>,
   modalText: 'Nos encargamos de promocionar tus productos o servicios en las redes sociales de tu marca: Facebook e Instagram, con el objetivo de encontrar personas que estén dispuestas a registrar un pedido o enviar un mensaje a tus redes sociales, por medio de tu página web. Buscando nuevo tráfico de clientes potenciales y llegando a clientes existentes que ya registraron un pedido e incentivar a una nueva conversión.',
   modalList: ['Definiremos tus objetivos (Mensajes o Comentarios)', 'Esableceremos un presupuesto publicitario', 'Gestionaremos los permisos necesarios', 'Crearemos las campañas necesarias', 'Reportaremos los resultados al finalizar cada campaña de prueba', 'Optimizaremos los anuncios de cada campaña ganadora'] },

  ];

  return (
    <Container>
      
      <TitPrin className='text-center mb-4'>Soluciones Digitales a la Medida</TitPrin>
      <Row className="d-none d-sm-flex">
        {cardsData.map((card) => (
          <Col key={card.id}>
            <CardInfo
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCardClick(card)}
            >
              {card.icon}
              <TitSec className='mt-3'>{card.title}</TitSec>
              <p className='text-muted'>{card.text}</p>
              <BsArrowRightShort size={40} color="#FD6003" />
            </CardInfo>
          </Col>
        ))}
      </Row>

      {/* Carrusel para dispositivos móviles */}
      <Carousel className="d-sm-none">
        {cardsData.map((card) => (
          <div key={card.id}>
            <CardInfo onClick={() => handleCardClick(card)}>
              {card.icon}
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <BsArrowRightShort size={40} color="dodgerblue" />
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
                <p>{selectedCard.modalText}</p>
                <p>Como Trabajamos?</p>
                <ul>
                  {selectedCard.modalList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <Link to="/ruta-de-contacto"> 
        <ContactoButton />
      </Link>
                </>
            )}
          </Modal.Body>
        </Modal>
        
    </Container>
  );
};

export default Services;
