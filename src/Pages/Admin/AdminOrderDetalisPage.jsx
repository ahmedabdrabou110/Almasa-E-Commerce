import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminOrderDetalis from '../../components/Admin/AdminOrderDetalis'
import Dashboard from '../../components/DashboardAdmin/DasboardAdmin'
import { collection } from 'firebase/firestore'
import { fireStore } from '../../firebase'
const AdminOrderDetalisPage = () => {
    
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminOrderDetalis  />  
                </Col>
            </Row>
        </Container>
    )
}

export default AdminOrderDetalisPage
