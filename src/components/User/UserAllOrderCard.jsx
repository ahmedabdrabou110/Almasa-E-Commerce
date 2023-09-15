import React from 'react'
import { Row, Col } from 'react-bootstrap'

const UserAllOrderCard = ({item}) => {
    const info = item?.data;
   
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={info?.image} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {info?.description}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">الكميه</div>
                        <input
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                            value={info?.qty}
                            disabled
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
