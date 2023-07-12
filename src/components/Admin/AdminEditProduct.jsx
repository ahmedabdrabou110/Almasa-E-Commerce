import { Add } from '@mui/icons-material';
import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import useRetriveProduct from '../../Hooks/RetriveProductsHook';
import { useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { fireStore, storage } from '../../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';

const AdminEditProduct = () => {
    const products = useRetriveProduct();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
    const [discountPrice , setDiscountPrice] = useState("");
    const [image , setImage] = useState(null);
    const [price , setPrice] = useState("");
    const [progresspercent ,setProgresspercent] = useState(0);
    const [mainCategory , setMainCategory] = useState("");
    const [secondaryCategory , setSecondaryCategory] = useState([]);
    const [brand , setBrand] = useState("");
    const types =["image/jpg" , "image/jpeg", "image/png" , "image/jfif"];
    const param = useParams();
    const itemId = param.id ;
    const targetProduct = products.filter(item => item.productId === itemId )[0];
    let Product ;
    const handleProductImg = e =>{
        let selectedImg = e.target.files[0];
        if(selectedImg) {
            if(selectedImg&&types.includes(selectedImg.type)) {
                setImage(selectedImg);
            }else{
                setImage(null);
                toast.error("من فضلك ادخل امتداد صورة مناسب ");
            }
        }else{
            toast.error("من فضلك ادخل الصورة"); 
        }
    }
    const handleUpdate= async e =>{
        Product = targetProduct ;
        e.preventDefault();
        const storageRef = ref(storage , `product-images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef , image);
        uploadTask.on("state_changed" , snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
        }, error => toast.error(error.message) , ()=>{
                getDownloadURL(storageRef).then(url => {
                    updateDoc(doc(collection(fireStore , "products"), Product.ID), {
                        title, 
                        description , 
                        price:Number(price),
                        discountPrice , 
                        mainCategory,
                        secondaryCategory ,
                        image:url, 
                        brand,
                        productId:Product.productId
                    }).then(()=>{
                        toast.success("تم تعديل المنتج بنجاح");
                        setTitle("");
                        setDescription("");
                        setPrice("")
                        setDiscountPrice("");
                        setMainCategory("")
                        setSecondaryCategory("")
                        setImage(null);
                    }).catch(error => {
                        toast.error("فشل تعديل المنتج");
                    })
                })
        })
        
    }
  return (
    <div>
            <Toaster />
            <Row className="justify-content-center ">
                <div className="admin-content-text m-4 text-center pb-4">تعديل علي المنتج</div>
                <Col sm="8">
                <form onSubmit={handleUpdate} >
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <input type='file' onChange={handleProductImg}  style={{ width:"100%" , cursor:"pointer"}} required />
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
                        <option value="عبايات" >عبايات</option>
                        <option value="أكسسوارات"> أكسسوارات</option>
                        <option value="جلابيات"> جلابيات</option>
                        <option value="عطورات"> عطورات</option>
                        <option value="تخفيضات"> تخفيضات</option>
                        <option value="اعلانات"> اعلانات</option>
                    </select>

                    {/* <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                        selectedValues={secondaryCategory}
                    /> */}
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
                    <button type='submit' className="btn-save d-inline mt-2  " > تعديل المنتج</button>
                </Col>
            </Row>
                </form>
                </Col>
            </Row>
        </div>
  )
}

export default AdminEditProduct