import express from "express";
import cors from "cors"
import {v4 as uuidv4} from "uuid"
import stripe from '@stripe/stripe-js';



const stripePromise = loadStripe("pk_test_51NQJdpBhVQj8EeSgSQZ2CyevfQemzjG2XWdFXUJ55yK7P16ZUp3UT6aCLdauIxgVYGAZlQ1oSCNT0nBsRVDjAj7b00KT96my6V");
const stripe = new StripeCheckout('sk_test_51NQJdpBhVQj8EeSgN699s3rHweDZbjSbFe8RDylHdCAqquAOzlOsp4ujfc5sdAglPdTGUDaUJDJXTCH68f5kvluh00zJhan4x5');
app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to our Ecommerce Store');
})

app.post('/checkout',async(req, res)=>{
    let error;
    let status;
    try{
        const {cart, token}=req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create({
            amount: cart.totalPrice*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: 'products descriptions here',
            shipping:{
                name: token.card.name,
                address:{
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        },{idempotencyKey: key})
        status="success";
    }
    catch(error){
        console.log(error);
        status="error"
    }
    res.json({status});
})

app.listen(8080,()=>{
    console.log('your app is running on port no 8080');
})