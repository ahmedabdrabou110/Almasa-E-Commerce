import React , {useState, useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../cart/CartItem'
import AdminOrderCart from './AdminOrderCart'
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

const AdminOrderDetalis = () => {
    const uid = useCurrentId();
    const [data, setData] = useState([]);
    const param = useParams();
    const [state , setState] = useState("");
    
  useEffect( ()=>{
    const fetchData =async ()=>{
     const querySnapshot =  await getDocs(collection(fireStore , `Buyer-Personal-Info`));
     const documents = querySnapshot?.docs?.map((doc) => doc.data()).filter(item => item?.id === param.id)
     setData(documents);
    }
     fetchData()
  },[])

  const [product, setProduct] = useState([]);
  const   [searchParam , setSearchParm] = useSearchParams();
  useEffect( ()=>{
    const fetchData =async ()=>{
     const querySnapshot =  await getDocs(collection(fireStore , `Buyer-cart${param.id}`));
     const documents = querySnapshot.docs.map((doc) => doc.data().data).filter(item => searchParam.get("product") === item?.productId);
     setProduct(documents);
    }
     fetchData()
  },[])

  
    
    
  const navigate = useNavigate();
  
    const handleFormSubmit = e => {
        e.preventDefault();
        const [Product] = product ;
        Product.state = state ;
        const collectionRef = collection(fireStore , `Buyer-cart${param.id}`);
        const docRef = doc(collectionRef  , Product.id);
        setDoc(docRef, Product  ).then(()=>{
            deleteDoc(docRef).then(()=>{
                toast.success("Order Updated Successfully");
                deleteDoc(doc(collection(fireStore , "Buyer-Personal-Info")),param.id ).then(()=>{
                    toast.success("تم الانتهاء من الطلب");
                    setTimeout(()=>{
                        navigate(-1)
                    },1000)
                })
            })
        })
        // console.log(Product)
    }

    
    return <>
        <Toaster />
                {product?.state !== "تم الانتهاء" &&  (<div>
        <div className='admin-content-text'>تفاصيل الطلب</div>
        <AdminOrderCart  />
        

        <Row className="justify-content-center mt-4 user-data">
            <Col xs="12" className=" d-flex">
                <div className="admin-content-text py-2">تفاصيل العميل</div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    الاسم:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    {data[0]?.firstName } {data[0]?.lastName}
                </div>
            </Col>

            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    رقم الهاتف:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    {data[0]?.phoneNumber}
                </div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    الايميل:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    {data[0]?.Email}
                </div>
            </Col>
            
            <form className="d-flex mt-2 justify-content-center" onSubmit={handleFormSubmit}>
                <select
                    name="languages"
                    id="lang"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    className="select input-form-area mt-1  text-center px-2 w-50">
                    <option selected disabled value="">حالة الطلب</option>
                    <option value="قيد التنفيذ">قيد التنفيذ</option>
                    <option value="تم الانتهاء">تم الانتهاء</option>
                </select>
                <button type="submit" className="btn-a px-3 d-inline mx-2 ">حفظ </button>
            </form>
        </Row>
    </div>
    )}
    {product?.state === "تم الانتهاء" && 
        (
            <div className='d-flex justify-content-center align-center'>
                <h1>تم تنفيذ الطلب</h1>
            </div>
    ) }
    </>
}

export default AdminOrderDetalis
