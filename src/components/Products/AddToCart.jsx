import React from 'react'

const AddToCart = ({product , addToCart}) => {
    const handleCart = () =>{
        addToCart(product)
    }
  return (
    <div className="product-cart-add px-3 py-3 d-inline mx-3" onClick={handleCart} >اضف للعربة</div>
  )
}

export default AddToCart