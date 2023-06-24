import React , {useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [fullName , setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password , setPassword]  = useState("")
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(fullName , email,password);
  }
    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
              <label className="mx-auto title-login">تسجيل حساب جديد</label>
              <input
                placeholder="اسم المستخدم..."
                type="text"
                className="user-input mt-3 text-center mx-auto"
                value={fullName}
                onChange={e=>setFullName(e.target.value)}
              />
              <input
                placeholder="الايميل..."
                type="text"
                className="user-input my-3 text-center mx-auto"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <input
                placeholder="كلمه السر..."
                type="password"
                className="user-input text-center mx-auto"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
              <button type='submit' className="btn-login mx-auto mt-4">تسجيل الحساب</button>
              <label className="mx-auto my-4">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    اضغط هنا
                  </span>
                </Link>
              </label>
            </form>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage
