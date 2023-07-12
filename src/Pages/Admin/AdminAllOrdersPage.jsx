import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import Pagination from '../../utility/Pagination'
import { collection } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
const AdminAllOrdersPage = () => {
    const collectionRef = collection(fireStore , `Buyer-Personal-Info`) ;
    const [data] = useCollectionData(collectionRef);
    
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    {
                        data?.length > 0 && data.map(item =>(
                            <>
                                <AdminAllOrders item={item} key={item.id} />
                                <Pagination />
                            </>
                        ))
                    }

                    {
                        data?.length < 1 && <h1 className='d-flex justify-center align-items-center text-gray'>لا توجد طلبات حاليا </h1>
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage
