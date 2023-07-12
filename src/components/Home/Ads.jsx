import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Ads1 from "../../assets/ads1.webp"
import Ads2 from "../../assets/ads2.jpg"
import Ads3 from "../../assets/ads3.jpg"
import AdsCard from '../../utility/AdsCard';
const Ads = () => {
  return (
    <div className="p-2">
        <Container >
            <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads1} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads2} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads3} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                <AdsCard src={Ads1} />
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Ads