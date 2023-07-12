import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import useGetTotalPrice from '../../Hooks/GetTotalPriceOfCart';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ChoosePayMethoud = () => {
    // const [visa,setVisa] = useState(false);
    const [selectedOption, setSelectedOption] = useState("")
    const totalPrice= useGetTotalPrice();
    const navigate = useNavigate();
    
    const handleForm = e => {
        
    }

    const handleChange = e => {
        setSelectedOption(e.target.value)
        if(selectedOption === "visa") {
            setVisa(true)
        }else{
            setVisa(false);
        }
    }

    // const handleToken = async token => {
    //     const cart = {name:"All products", totalPrice};
    //     const response =await axios.post("http://127.0.0.1:8080/checkout" , {
    //         token , cart
    //     }) ; 
    //     let status = response.data ; 
    //     if(status === "success") {
    //         toast.success("تم الشراء بنجاح باستخدام الفيزا", {
    //             position:"top-right",
    //             duration:2000,
    //         })
    //         navigate("/");
    //     }else{
    //         toast.error("حدث خطا ما في اكمال الشراء ");
    //     }
    // }

    return (
        <div>
            <Toaster />
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <form className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="visa"
                            checked={selectedOption === "visa"}
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
                </Row>
            </form>

            <Row>
                <Col xs="12" className="d-flex justify-content-end" >
                    {/* <div className="product-price d-inline   border"  style={{marginLeft:"20px"}}>{totalPrice} ر.س</div>
                {!visa && (<StripeCheckout
                stripeKey='pk_test_51NPwL7IoF9xIXPk9ppejePYp27PeddQw9eZcacFnLZvFqFrZceB4cagYQDd4RlD9HMqTxEvZJPOiYfVcgvcCeKdk00Nzf2HuPw'
                token={handleToken}
                billingAddress
                shippingAddress
                name="All Products"
                amount={totalPrice * 100}
            >
            </StripeCheckout>)} */}
                   <Link to="/order/paymethod/delivery" className="product-cart-add px-3 pt-2 d-inline me-2"  onClick={handleForm}>إتمام الشراء</Link>
                </Col>
            </Row>
            
        </div>
    )
}

export default ChoosePayMethoud
