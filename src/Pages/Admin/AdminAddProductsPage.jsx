import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Dashboard from '../../components/DashboardAdmin/DasboardAdmin'
const AdminAddProductsPage = () => {
    return (
        <Container style={{height:"100vh"}} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddProducts />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddProductsPage
