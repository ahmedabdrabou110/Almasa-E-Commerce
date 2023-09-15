import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { fireStore } from '../../firebase'
import useCurrentId from '../../Hooks/CurrentIdUserHook'

const UserAllAddress = () => {
    const uid = useCurrentId();
    const collectionRef = collection(fireStore , "address");
    const [data , loading ,error] = useCollectionData(collectionRef);
    const userData = data?.filter(item => item.id  === uid);
    return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            {loading && <h1>من فضلك انتظر قليلا</h1>}
            {!loading && data && userData?.map(item => (
                <UserAddressCard key={item} item={item} />
            ))}

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
