import { CloudUpload } from '@mui/icons-material'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { fireStore } from '../../firebase';
import { Toaster, toast } from 'react-hot-toast';
const AdminAddBrand = () => {
    const [brand ,setBrand] = useState("");
    const handleBrand = e =>{
        e.preventDefault();
        addDoc(collection(fireStore , "brand"),{
            brand,
            path:brand,
        }).then(()=>{
            toast.success("تم إضافة براند بنجاح");
            setBrand("")
        }).catch(()=>{
            toast.error('حدث خطا ما ');
            location.reload();
        })
    }
    return (
        <form onSubmit={handleBrand}>
            <Toaster />
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    {/* <div className="text-form pb-2">صوره الماركه</div>
                    <CloudUpload /> */}
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </form>
    )
}

export default AdminAddBrand
