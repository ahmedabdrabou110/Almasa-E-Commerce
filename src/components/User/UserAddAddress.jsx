import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { fireStore } from '../../firebase'
import { useState } from 'react'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const UserAddAddress = () => {
    const uid = useCurrentId();
    const [address , setAddress] = useState("");
    const [details , setDetails] = useState("");
    const [number , setNumber] = useState("");
    const navigate = useNavigate();
    const handleAddAddress = e => {
        e.preventDefault();
        const collectionRef = collection(fireStore, "address");
    addDoc(collectionRef , {
        id:uid,
        address ,
        details,
        number,
    }).then(()=>{
        toast.success("تم اضافة عنوان");
        setAddress("");
        setDetails("");
        setNumber("");
        setTimeout(()=>{
            navigate(-1);
        },500)
    }).catch(()=>{
        toast.error("لم يتم اضافة عنوان . حدث خطا ما ");
    })
    }
    
    return (
        <form onSubmit={handleAddAddress}>
            <Toaster />
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">اضافة عنوان</button>
                </Col>
            </Row>
        </form>
    )
}

export default UserAddAddress
