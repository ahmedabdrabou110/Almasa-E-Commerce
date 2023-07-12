import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { collection, doc, getDocs } from 'firebase/firestore'
import { fireStore ,auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useCollectionData } from "react-firebase-hooks/firestore"

const AdminAllOrders =  ({item}) => {
    const collectionRef = collection(fireStore , `Buyer-cart ${item.id}`) ;
    const [data] = useCollectionData(collectionRef);
   
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                {
                    data?.length > 0 && data.map(data => (
                        <AdminAllOrdersItem key={item.postal} data={data} item={item} />
                    ))
                }
                {
                    data?.length <1 && <div className='d-flex justify-center align-items-center'>
                        <h1>لا توجد طلبات حاليا</h1>
                    </div>
                }
            </Row>
        </div>
    )
}

export default AdminAllOrders
