import React from 'react'
import { Facebook, Instagram, PhoneAndroid, Twitter } from '@mui/icons-material';
import { Container, Col ,Row} from "react-bootstrap";
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot ">الشروط والاحكام</div>
                        <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-end align-items-center ">
                        <div className="d-flex pt-3 mx-2">
                            <PhoneAndroid />
                            <p className="footer-phone">0122455346356</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <Facebook/>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <Instagram />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <Twitter />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
