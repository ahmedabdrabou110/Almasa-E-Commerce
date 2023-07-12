import React from 'react'
import { Container } from 'react-bootstrap'
import Ads4 from "../../assets/ads4.jpg"
import Ads5 from "../../assets/ads5.jpg"
import Ads6 from "../../assets/ads6.jpg"
import Ads7 from "../../assets/ads7.jpg"
import AdsCard from '../../utility/AdsCard'
const AdsColor = () => {
  return (
    <div className="p-2">
        <Container >
            <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads4} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads5} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads6} />
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads7} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AdsColor