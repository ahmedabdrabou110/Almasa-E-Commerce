import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddUser from '../../components/Admin/AdminAddUser'

const AdminAddUserPage = () => {
  return (
    <Container style={{height:"100vh"}} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddUser />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminAddUserPage