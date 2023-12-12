import React from 'react';
import Typewriter from "typewriter-effect";
import Perfil from '../assets/perfil.png';
import styled from 'styled-components';

const Cover = () => {

  const Titulo1 = styled.h1`
    color: #242E66;
  `;

  const JustifiedParagraph = styled.p`
    text-align: justify;
  `;

  const ContenedorGeneral = styled.div`
    height: 95vh;
  `;

  const BotonServicios = styled.button`
    background-color: transparent;
    border-color: #FD6003;
    color: #242E66;
    &:hover{
      color: white;
      background-color: #FD6003;
    }
  `;
  const BotontContacto = styled.button`
    background-color: #242E66;
    color: white;
    &:hover{
      background-color:transparent;
      border-color:  #242E66;
    }
  `
  const ImagenPerfil = styled.img`
    max-width: 100%; /* Asegura que la imagen no se extienda más allá de su contenedor */
    height: auto; /* Hace que la altura de la imagen sea proporcional a su ancho */
  `;

  const OrangeText = styled.h2`
    color: #FD6003;
  `

  return (
    <div className="container-fluid">
      <ContenedorGeneral className='row justify-content-around align-items-center'>
        <div className='col-sm-12 col-md-5 my-auto text-start fw-bold'>
          <OrangeText className='fs-2'>TU AGENCIA DIGITAL</OrangeText>
          <Titulo1 className=' display-3 fw-bold'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Marketing Digital")
                  .pauseFor(800)
                  .deleteAll()
                  .typeString("Edición de Video")
                  .pauseFor(800)
                  .deleteAll()
                  .typeString("Social Media")
                  .start();
                  autoStart: true
              }}
            />
          </Titulo1>
          <JustifiedParagraph className='mt-4 text-justify text-muted h6 fw-light'>
          Diseñamos estrategias personalizadas que abarcan desde la optimización de motores de búsqueda hasta campañas publicitarias en redes sociales. Impulsamos tu visibilidad online y te ayudamos a conectar con tu público objetivo de manera impactante.
          </JustifiedParagraph>
          <BotontContacto className='rounded-pill btn-lg  btn mt-3'>Contactarme</BotontContacto>
          <BotonServicios className='rounded-pill btn  btn-lg mt-3 ms-2'>
            Proyectos
          </BotonServicios>
        </div>
        <div className='col-sm-12 col-md-5'>
          <ImagenPerfil
            className='img-fluid rounded-circle'
            src={Perfil}
            alt='Imagen de desarrollador'
          />
        </div>
      </ContenedorGeneral>
    </div>
  );
};

export default Cover;

