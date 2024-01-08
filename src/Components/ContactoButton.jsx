import React from 'react'
import styled from 'styled-components'
const ContactoButton = () => {

    const Contacto = styled.button`
    background-color: #FD6003;
    color: white;

    &:hover {
        color: #242e66;
        border-color: #FD6003;
        background-color: transparent;
    }
    `
  return (
    <div>
      <Contacto className='rounded-pill btn'>Contactarme</Contacto>
    </div>
  )
}

export default ContactoButton
