import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../../utility/Pagination'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProductsCard from '../../components/Admin/AdminAllProductsCard'
import { collection, getDocs } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import Dashboard from '../../components/DashboardAdmin/DasboardAdmin'
const AdminAllProductsPage = () => {
    
    return (
        <Container style={{marginTop:"60px" , height:"auto"}} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                <div className='admin-content-text'>ادارة جميع المنتجات</div>
                    <AdminAllProducts />
                    {/* <Pagination /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
