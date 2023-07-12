import { CloudUpload } from '@mui/icons-material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
// import AddCategoryHook from '../../hook/category/add-category-hook'
import { fireStore } from '../../firebase';
import { Toaster, toast } from 'react-hot-toast';
const AdminAddCategory = () => {
    const [category , setCategoty] = useState("");
    // const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =AddCategoryHook();
    const handleCategory = e =>{
        e.preventDefault();
        addDoc(collection(fireStore , "categories"), {
            category,
        }).then(()=>{
            toast.success("تم إضافة صنف بنجاح");
            setCategoty("");
        }).catch(()=>{
            toast.error("حدث خطا ما");
            location.reload();
        })
    }

    return (
        <form onSubmit={handleCategory}>
            <Toaster />
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    {/* <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label for="upload-photo">
                            <CloudUpload />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            id="upload-photo"
                        />
                    </div> */}

                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        value={category}
                        onChange={e => setCategoty(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button  className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>

            {/* {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
            <ToastContainer /> */}
        </form>
    )
}

export default AdminAddCategory
