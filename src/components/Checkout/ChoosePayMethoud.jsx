import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import useGetTotalPrice from '../../Hooks/GetTotalPriceOfCart';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ChoosePayMethoud = () => {
    const [visa,setVisa] = useState(true);
    const [selectedOption, setSelectedOption] = useState("")
    const totalPrice= useGetTotalPrice();
    const navigate = useNavigate();
    
    
    const handleForm = e => {
        e.preventDefault();
        if(visa === true) {
            navigate("/user/order/paymethod/delivery")
        }else{
            navigate("/user/order/paymethod/paypal")
        }
    }

    const handleChange = e => {
        setSelectedOption(e.target.value)
        if(selectedOption === "visa") {
            setVisa(true)
        }else{
            setVisa(false);
        }
    }

    

    return (
        <div>
            <Toaster />
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <form className="user-address-card my-3 px-3" style={{height:"200px"}} onSubmit={handleForm}>
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="visa"
                            checked={selectedOption === "visa" }
                            className="mt-2"
                            onChange={handleChange}
                        />
                        <label className="mx-2" htmlFor="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs="12" className="d-flex">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="delivery"
                            className="mt-2"
                            checked={selectedOption === "delivery"}
                            onChange={handleChange}
                        />
                        <label className="mx-2" htmlFor="group1">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                <Col xs="12" className="d-flex justify-content-end" >
                    {visa && <button type="submit" className="product-cart-add px-3 pt-2 d-inline me-2">
                        إتمام الشراء 
                    </button>}
                    {!visa && <button type="submit" className="product-cart-add px-3 pt-2 d-inline me-2">
                        تسجيل الدفع
                    </button>}
                </Col>
                </Row>
            </form>

            <Row>
                
            </Row>
            
        </div>
    )
}

export default ChoosePayMethoud
