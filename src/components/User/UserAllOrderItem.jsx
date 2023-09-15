import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
import { collection } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { useCollectionData } from 'react-firebase-hooks/firestore'
const UserAllOrderItem = () => {
    const uid = useCurrentId();
    const collectionRef = collection(fireStore , `Buyer-cart${uid}`);
    const [allOrder , loading ,] = useCollectionData(collectionRef);
    const randomNumber = Math.floor(Math.random()*100);
    const allPrice = allOrder?.map(item => item?.data?.price).reduce((acc, curr) => acc + curr , 0)
    return (
        <>
            {loading && allOrder?.length < 1 && <h1>لا توجد طلبات معلقة</h1>}
            {!loading && allOrder?.length > 0 &&   <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم #{randomNumber}</div>
            </Row>
            
            <Row className="d-flex justify-content-between">
                {allOrder?.map(item => (
                    <UserAllOrderCard item={item} key={item.id} />
                ))}
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">الحالة</div>
                        <div className="d-inline mx-2 stat">قيد التنفيذ</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{allPrice} ر.س</div>
                    </div>
                </Col>
            </Row>
        </div>}
        </>
    )
}

export default UserAllOrderItem
