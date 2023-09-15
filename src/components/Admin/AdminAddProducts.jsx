import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import { Add } from '@mui/icons-material';
import { Toaster } from 'react-hot-toast';
import useAddProduct from '../../Hooks/AddProductHook';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { fireStore } from '../../firebase';
import { collection } from 'firebase/firestore';
const AdminAddProducts = () => {
    const {
        title,setTitle,description , setDescription , discountPrice, setDiscountPrice,price,setPrice ,image, setImage ,mainCategory, setMainCategory ,secondaryCategory , setSecondaryCategory, brand ,setBrand,
        handleProductImg,onSelect , onRemove , options , handleAddProducts
    } = useAddProduct();
    const collectionRef = collection(fireStore , "categories");
    const [data , loading , error] = useCollectionData(collectionRef);
    

 

    return (
        <div style={{marginTop:"60px"}}>
            <Toaster />
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                <form onSubmit={handleAddProducts}>
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <input type='file' onChange={handleProductImg} style={{ width:"100%" , cursor:"pointer"}} required />
                    {/* <UploadFile /> */}
                    
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        value={discountPrice}
                        onChange={e=>setDiscountPrice(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        required
                    />
                    <select
                        name="languages"
                        id="lang"
                        value={mainCategory}
                        required
                        onChange={e =>setMainCategory(e.target.value)}
                        className="select input-form-area mt-3 px-2 ">
                        {data?.map((item , index) => (
                            <option key={index} value={item?.category}>{item?.category}</option>
                        ))}
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                        selectedValues={secondaryCategory}
                    />
                    <select
                        name="brand"
                        id="brand"
                        value={brand}
                        required
                        onChange={e=>setBrand(e.target.value)}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">الماركة</option>
                        <option value="val2">التصنيف الماركة الاولي</option>
                        <option value="val2">التصنيف الماركة الثانيه</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <div className='color ms-2 mt-2'>
                        <Add style={{display:"flex" , alignItems:"center"}} />
                        </div>
                    </div>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button type='submit' className="btn-save d-inline mt-2 ">إضافة منتج</button>
                </Col>
            </Row>
                </form>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts
