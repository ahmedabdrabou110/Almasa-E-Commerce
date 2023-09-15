import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddCategory from '../../Components/Admin/AdminAddCategory'
import Dashboard from '../../components/DashboardAdmin/DasboardAdmin'
const AdminAddCategoryPage = () => {
    return (
        <Container style={{marginTop:"60px" , height:"678px"}}>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAddCategory />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddCategoryPage
