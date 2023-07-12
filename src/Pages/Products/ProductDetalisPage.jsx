import React from 'react'
import { Container } from 'react-bootstrap'
import ProductsContainer from '../../components/Products/ProductsContainer'
import RateContainer from '../../components/Rate/RateContainer'
import ProductDetalis from '../../components/Products/ProductDetalis'

const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <Container>
                <ProductDetalis />
                <RateContainer />
                <ProductsContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
