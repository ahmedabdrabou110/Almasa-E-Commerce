import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Ads1 from "../../assets/Lessthan199.jpg"
import Ads2 from "../../assets/Lessthan249.jpg"
import Ads3 from "../../assets/Colored.jpg"
import Ads4 from "../../assets/Winter.jpg"
import AdsCard from '../../utility/AdsCard';
import { Link } from 'react-router-dom';
const Ads = () => {
  return (
    <div className="p-2" style={{marginBottom:"300px"}}>
        <Container >
            <div className="row">
                <Link to="/المنتجات المضافة حديثا" className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads1} />
                </Link>
                <Link to="/عبايات البشت و الفرشة" className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads2} />
                </Link>
                <Link to="/عبايات ملونه" className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads3} />
                </Link>
                <Link to="/التشكيلة الشتوية" className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads4} />
                </Link>
            </div>
        </Container>
    </div>
  );
}

export default Ads