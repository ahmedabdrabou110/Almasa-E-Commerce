import React, {  useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { Col, Form, Row } from 'react-bootstrap';
import useAllNumberOfCart from '../../Hooks/GetNumberodItemsCart';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import useGetTotalPrice from '../../Hooks/GetTotalPriceOfCart';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import PaypalCheckoutButtons from "./PaypalCheckoutButtons";
const PaypalMethod = () => {
    const totalQty = useAllNumberOfCart();
  const uid = useCurrentId();
  const totalPrice = useGetTotalPrice();
  const [show, setShow] = useState(false);
  const [infoDetails, setInfoDetails] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    phoneNumber: "",
    city: "",
    state: "",
    postal: "",
    method:"visa card"
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfoDetails((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      
      
      const handleForm = e =>{
        e.preventDefault();
        console.log("first")
        setShow(true);
      }
      const product = {
        totalQty,
        totalPrice
      }
  return (
    <>
      <Toaster />
      <Form
        className="m-3"
        style={{ border: "1px solid #0f0f0f", padding: "10px" }}
        onSubmit={handleForm}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>الاسم الأول</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              onChange={handleChange}
              value={infoDetails.firstName}
              placeholder="أدخل اسمك الاول"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>الاسم الأخير</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              onChange={handleChange}
              value={infoDetails.lastName}
              placeholder="ادخل اسمك الثاني"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>العنوان الاول</Form.Label>
          <Form.Control
            placeholder="1234 شارع ..."
            name="address1"
            onChange={handleChange}
            value={infoDetails.address1}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>العنوان الثاني</Form.Label>
          <Form.Control
            placeholder="مبني 2 رقم الشقة "
            onChange={handleChange}
            name="address2"
            value={infoDetails.address2}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phonenumber">
          <Form.Label>رقم الهاتف</Form.Label>
          <Form.Control
            type="number"
            placeholder="أدخل رقم الهاتف"
            onChange={handleChange}
            name="phoneNumber"
            value={infoDetails.phoneNumber}
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>المدينة</Form.Label>
            <Form.Control
              type="text"
              placeholder="المدينة"
              onChange={handleChange}
              name="city"
              value={infoDetails.city}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>الحي</Form.Label>
            <Form.Control
              type="text"
              placeholder="الحي"
              onChange={handleChange}
              name="state"
              value={infoDetails.state}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>رقم البريد</Form.Label>
            <Form.Control
              type="number"
              placeholder="رقم البريد"
              onChange={handleChange}
              name="postal"
              value={infoDetails.postal}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="quantity">
            <Form.Label>عدد المنتجات</Form.Label>
            <Form.Control type="text" value={totalQty} disabled={true} />
          </Form.Group>

          <Form.Group as={Col} controlId="total_price">
            <Form.Label>السعر الكلي</Form.Label>
            <Form.Control
              type="text"
              value={`${totalPrice} ر.س`}
              disabled={true}
            />
          </Form.Group>
        </Row>
        {!show &&         <button type="submit" className='btn btn-secondary btn-save'>أكمال الطلب</button>}
        {show && <div className="paypal-button-container">
            <PaypalCheckoutButtons product={product} infoDetails={infoDetails}  />
        </div>}

        
        
        
      </Form>
    </>
  )
}

export default PaypalMethod