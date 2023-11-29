import React from 'react';
import Typewriter from "typewriter-effect";
import Perfil from '../assets/IMG_5255.jpg'
import styled from 'styled-components';

const Cover = () => {
  const Container = styled.div`
  background-color: black;
  height: 100vh;
  `
  const Titulo1  = styled.h1`
  color: #0B5ED7;
  `
  const JustifiedParagraph = styled.p`
  text-align: justify;
  `
  const ContenedorGeneral = styled.div`
  margin-top: 50px;
  `
  const BotonProyectos = styled.button`
  background-color: transparent;
  border-color: white;
  `
  
;
  return (
    <Container className="container-fluid  text-white ">
      <ContenedorGeneral className='row vh-100 justify-content-around align-items-center'>
        <div className='col-sm-4 my-auto text-start fw-bold'>
        <h4>Hola soy Angel Escobar</h4>
         <Titulo1 className='mt-2' ><Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Disenador UX/UI")
         
       .pauseFor(800)
       .deleteAll()
       .typeString("Desarrollador Web")
       .start();
       }}
       /></Titulo1>
       <JustifiedParagraph className='mt-4text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maiores? Quibusdam voluptates necessitatibus provident! Maiores velit ab quod, quos saepe doloribus labore officia qui sed laudantium necessitatibus suscipit repudiandae enim.</JustifiedParagraph>
         <button className='rounded-pill fw-bold btn btn-primary'>Contactarme</button>
         <BotonProyectos className='rounded-pill fw-bold btn btn-primary ms-5'>Contactarme</BotonProyectos>
       
        </div>
        <div className='col-sm-4 img-fluid'>
          <img className='img-fluid rounded-circle'
          src={Perfil}
          alt='Imagen de desarrollador'
          ></img>
        </div>
      </ContenedorGeneral>
    </Container>
  );
};

export default Cover;
