import React from 'react'

const DeleteProduct = ({product , cartProductDelete}) => {
    const handleDelete =()=>{
        cartProductDelete(product);
    }
  return (
    <div  className="d-inline btn btn-danger text-white item-delete-edit" onClick={handleDelete}>ازاله</div>
  )
}

export default DeleteProduct