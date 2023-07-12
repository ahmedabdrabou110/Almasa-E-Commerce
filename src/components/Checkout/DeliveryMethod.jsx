import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useAllNumberOfCart from '../../Hooks/GetNumberodItemsCart';
import useGetTotalPrice from '../../Hooks/GetTotalPriceOfCart';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { fireStore } from '../../firebase';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function DeliveryMethod() {
    const navigate = useNavigate();
    const totalQty = useAllNumberOfCart();
    const uid =  useCurrentId();    
    const totalPrice= useGetTotalPrice();
    const [infoDetails , setInfoDetails] = useState({
        firstName:"",
        lastName:"",
        address1:"",
        address2:"",
        phoneNumber:"",
        city:"",
        state:"",
        postal:"",
    }) ;

    const handleChange = e=>{
        const {name , value} = e.target; 
        setInfoDetails(prevState => ({
            ...prevState , 
            [name]:value 
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        // console.log(infoDetails);
        const userData = await (await getDocs(collection(fireStore , "users"), uid)).docs.filter(item => item.data().id === uid).map(data => {
            return data.data();
        })
        addDoc(collection(fireStore ,"Buyer-Personal-Info"),{
            ...infoDetails ,
            Email : userData[0].Email ,
            id:userData[0].id ,
        });
        const cartData = await getDocs(collection(fireStore , `cart ${uid}`)) ;
        for(let snap of cartData.docs) {
            const data = snap.data();
            data.ID = snap.id ;
            await addDoc(collection(fireStore , `Buyer-cart ${uid}`),{data});
            await deleteDoc(doc(collection(fireStore , `cart ${uid}`) , snap.id))
        }
        toast.success("تم تنفيذ طلبك و سيصل طلبك في خلال 24 ساعة" , {
            duration:2000
        });
        setTimeout(()=>{
            navigate("/");
        },1900)
        
    }

  return (
    <>
            <Toaster />
    <Form className='m-3' style={{border:"1px solid #0f0f0f" , padding:"10px"}} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>الاسم الأول</Form.Label>
          <Form.Control type="text" name="firstName" onChange={handleChange} value={infoDetails.firstName} placeholder="أدخل اسمك الاول" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>الاسم الأخير</Form.Label>
          <Form.Control type="text" name="lastName" onChange={handleChange} value={infoDetails.lastName} placeholder="ادخل اسمك الثاني" required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>العنوان  الاول</Form.Label>
        <Form.Control placeholder="1234 شارع ..." name="address1" onChange={handleChange} value={infoDetails.address1} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>العنوان الثاني</Form.Label>
        <Form.Control placeholder="مبني 2 رقم الشقة " onChange={handleChange} name="address2" value={infoDetails.address2} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phonenumber">
        <Form.Label>رقم الهاتف</Form.Label>
        <Form.Control type="number" placeholder="أدخل رقم الهاتف" onChange={handleChange} name="phoneNumber" value={infoDetails.phoneNumber} required />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>المدينة</Form.Label>
          <Form.Control type="text" placeholder='المدينة' onChange={handleChange} name="city" value={infoDetails.city} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>الحي</Form.Label>
          <Form.Control type="text" placeholder='الحي' onChange={handleChange} name="state" value={infoDetails.state} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>رقم البريد</Form.Label>
          <Form.Control type="number" placeholder='رقم البريد' onChange={handleChange} name="postal" value={infoDetails.postal}  />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="quantity">
          <Form.Label>عدد المنتجات</Form.Label>
          <Form.Control type="text" value={totalQty} disabled={true} />
        </Form.Group>

        <Form.Group as={Col} controlId="total_price">
          <Form.Label>السعر الكلي</Form.Label>
          <Form.Control type="text" value={`${totalPrice} ر.س`} disabled={true} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        انهاء الشراء
      </Button>
    </Form>
    </>
  );
}

export default DeliveryMethod;