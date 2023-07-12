import React from 'react'
import CartItem from './CartItem'

const IndividualCard = ({cartProducts , cartProductIncrease ,cartProductDecrease , cartProductDelete }) => {
  return cartProducts.map(cartProduct => (
    <CartItem key={cartProduct.ID} cartProduct={cartProduct} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} cartProductDelete ={cartProductDelete}   /> 
  ))
}

export default IndividualCard