import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AdsCard = ({src}) => {
  return (
    <Card style={{  marginTop:"30px",overflow:"hidden" }}>
        <Card.Img  className='card_img' style={{ height:"inherit" }} variant="top" src={src} />
        </Card>
  )
}

export default AdsCard