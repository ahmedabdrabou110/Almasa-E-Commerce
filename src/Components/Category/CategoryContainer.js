import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

import clothe from "../../images/clothe.png";
import prod4 from "../../images/prod4.png";
const CategoryContainer = () => {
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="العبايات" img={clothe} background="#F4DBA4" />
                <CategoryCard title=" أكسسوارات" img={prod4} background="#F4DBA4" />
                <CategoryCard title="الجلابيات" img={clothe} background="#0034FF" />
                <CategoryCard title="عطورات" img={prod4} background="#F4DBA4" />
                <CategoryCard title="العبايات" img={clothe} background="#F4DBA4" />
                <CategoryCard title=" أكسسوارات" img={prod4} background="#F4DBA4" />
                <CategoryCard title="الجلابيات" img={clothe} background="#0034FF" />
                <CategoryCard title="عطورات" img={prod4} background="#F4DBA4" />
                <CategoryCard title="العبايات" img={clothe} background="#F4DBA4" />
                <CategoryCard title=" أكسسوارات" img={prod4} background="#F4DBA4" />
                <CategoryCard title="الجلابيات" img={clothe} background="#0034FF" />
                <CategoryCard title="عطورات" img={prod4} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default CategoryContainer
