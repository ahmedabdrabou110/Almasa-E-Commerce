import React from 'react'
import { Container } from 'react-bootstrap'
import Ads4 from "../../assets/Torah.jpg"
import Ads5 from "../../assets/Monasaba.jpg"
import Ads6 from "../../assets/Amalia.jpg"
import Ads7 from "../../assets/Pure.jpg"
import AdsCard from '../../utility/AdsCard'
import { Link } from 'react-router-dom'
const AdsColor = () => {
  return (
    <div className="p-2">
        <Container >
            <div className="row">
                <Link to="/النقابات و الطرح" className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads4} />
                </Link>
                <Link to="/عبايات مناسبات" className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads5} />
                </Link>
                <Link to="/عبايات سوداء" className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads6} />
                </Link>
                <Link to="/عبايات سفر" className="col-sm-6 col-md-6 col-xs-12">
                    <AdsCard src={Ads7} />
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default AdsColor