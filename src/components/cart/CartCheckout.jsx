import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = ({totalPrice}) => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div style={{fontSize:"18px"}} className="product-price d-inline w-100 my-3  border">{totalPrice} ر.س</div>
                <Link
                    to="/order/paymethoud"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">
                    <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
                </Link>
            </Col>
        </Row>
  )
}

export default CartCheckout