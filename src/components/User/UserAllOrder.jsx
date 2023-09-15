import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { collection } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const UserAllOrder = () => {
    const uid = useCurrentId();
    const collectionRef = collection(fireStore , `Buyer-cart${uid}`);
    const [order, , ]= useCollectionData(collectionRef);
    console.log(order)
    const orderData = order?.filter(item => item.id === uid);
    const collectionUserRef = collection(fireStore, "users");
    const [users, , ]= useCollectionData(collectionUserRef);
    
    const user= users?.filter(item => item.id === uid);
    console.log(user)
    return (
        <div>
        {user?.map(item => (
            <div className="admin-content-text pb-4" key={item.id}>اهلا {item.displayName}  </div>
        ))}
        <Row className='justify-content-between'>
            <UserAllOrderItem  />
        </Row>
        </div>
    )
}

export default UserAllOrder
