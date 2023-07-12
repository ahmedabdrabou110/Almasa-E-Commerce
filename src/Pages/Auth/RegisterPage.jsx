import React, {useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { auth , fireStore } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc , collection , doc } from "firebase/firestore"
import useRegister from '../../Hooks/RegisterHook'

const RegisterPage = () => {
  const {handleSignUp , email, password , fullName,setFullName , setEmail , setPassword} = useRegister()
      
  
    return (
        <Container style={{ minHeight: "680px" }}>
          <Toaster />
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column " >
           <form onSubmit={handleSignUp} className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
              <input
                placeholder="اسم المستخدم..."
                type="text"
                className="user-input mt-3 text-center mx-auto"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
              <input
                placeholder="الايميل..."
                type="text"
                className="user-input my-3 text-center mx-auto"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                placeholder="كلمه السر..."
                type="password"
                className="user-input text-center mx-auto"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type='submit' className="btn-login mx-auto mt-4">تسجيل الحساب</button>
           </form>
            <label className="mx-auto my-4 d-flex justify-center">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage
