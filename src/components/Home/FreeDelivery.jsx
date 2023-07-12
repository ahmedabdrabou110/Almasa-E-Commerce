import React from 'react'
import Free from '../../assets/free.jpg'
import { Container } from 'react-bootstrap'
const FreeDelivery = () => {
  return (
    <Container fluid >
        <a href="#">
            <img width="90%" style={{ marginLeft:"5%", marginRight:"5%" }} height="400px" src={Free} alt="" />
        </a>
    </Container>
  )
}

export default FreeDelivery