import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Delete, Logout } from '@mui/icons-material'
import { auth, fireStore } from '../../firebase'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
const UserProfile = () => {
    const navigate = useNavigate();
    const uid = useCurrentId();
    const handleLogout = ()=>{
        auth.signOut().then(()=>{
            toast.success("تم تسجيل الخروج بنجاح ");
            
            setTimeout(()=>{
                navigate("/");
                location.reload()
            },300)
        })
    }
    
    const collectionUserRef = collection(fireStore , "users");
    const [data, loading , error] = useCollectionData(collectionUserRef);
    const userData = data?.filter(item => item.id === uid);
    const collectionAddressRef = collection(fireStore , "address");
    const [info, loadingAddress, errorAddress] = useCollectionData(collectionAddressRef);
    const addressInfo = info?.filter(item => item.id )
    console.log(addressInfo);
    return (
        <>
            <div  style={{height:"300px"}}>
            <Toaster />
            <div className="admin-content-text">الصفحه الشخصية</div>
            <div className="user-address-card my-3 px-2" style={{height:"auto"}}>
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        {userData?.map(item => (
                            <div className="p-1 item-delete-edit" key={item.id}> {item?.displayName}</div>
                        ))}
                        
                    </Col>
                    
                </Row>

                <Row className="">
                    {addressInfo?.map(item =>(
                        <Col xs="12" className="d-flex" key={item.id}>
                            <div className="p-2">رقم الهاتف:</div>
                            <div className="p-1 item-delete-edit">{item?.number}</div>
                        </Col>
                    ))}

                    {!addressInfo && <></>}
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        {userData?.map(item => (
                            <div className="p-1 item-delete-edit" key={item.id}>{item?.Email}</div>
                        ))}
                    </Col>
                </Row>
                
            </div>
                <Row className='m-2 mt-5' style={{display:"flex"}}>
                    <Button variant='danger' onClick={handleLogout} className='text-white font-18 font-extrabold p-2'>
                        Logout
                        <Logout className='m-2'  />
                    </Button>
                </Row>
        </div>
        </>
    )
}

export default UserProfile
