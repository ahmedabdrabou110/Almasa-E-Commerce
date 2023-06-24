import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";

const BrandFeatured = ({ title, btntitle }) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand1} />
                <BrandCard img={brand1} />
                <BrandCard img={brand1} />
                <BrandCard img={brand1} />
                <BrandCard img={brand1} />

            </Row>
        </Container>
    )
}

export default BrandFeatured
