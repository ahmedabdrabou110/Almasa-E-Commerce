import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Product1 from '../../assets/product1.jpg'
const AdminAllOrdersItem = ({item, data}) => {
    const info  = data.data ;
    
    return (
        <Col sm="12">
            <Link
                to="/admin/orders/23"
                className="cart-item-body my-2 px-1 d-flex"
                style={{ textDecoration: "none" }}>
                <img width="160px" height="197px" src={info.image} alt="" />
                <div className="w-100" style={{marginRight:"20px"}}>
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text " style={{marginRight:"20px" , fontSize:"20px"}}>طلب من {item.firstName} {item.lastName}</div>
                            <div className="d-inline pt-2 cat-text">ازاله</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                {info.description}
                            </div>
                            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className=" d-flex">
                            <div className="mt-2  cat-text d-inline">الماركة :</div>
                            <div className="mt-1 barnd-text d-inline mx-1">{info.brand} </div>
                            <div
                                className="color  me-1 border"
                                style={{ backgroundColor: "#E52C2C" }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="cat-text pt-1 d-inline">الكميه</div>
                                <input
                                    className="mx-2 mt-1"
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                    disabled={true}
                                    value={info.qty}
                                />
                            </div>
                            <div className="d-inline pt-2 barnd-text ml-3">{info.totalPrice} ر.س</div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem
