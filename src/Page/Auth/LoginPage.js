import React ,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [email,setEmail] = useState("")
    const [password , setPassword]  = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        console.log( email,password);
      }
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <form onSubmit={handleSubmit} className="d-flex flex-column">
                            <label className="mx-auto title-login">تسجيل الدخول</label>
                            <input
                                placeholder="الايميل..."
                                type="text"
                                className="user-input my-3 text-center mx-auto"
                                value={email}
                                onChange={e =>setEmail(e.target.value)}
                            />
                            <input
                                placeholder="كلمه السر..."
                                type="password"
                                className="user-input text-center mx-auto"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <button type='submit' className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                            <label className="mx-auto my-4">
                                ليس لديك حساب ؟{" "}
                                <Link to="/register" style={{textDecoration:'none'}}>
                                    <span style={{ cursor: "pointer" }} className="text-danger">
                                        اضغط هنا
                                    </span>
                                </Link>
                            </label>
                        </form>
                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
            </Container>
    )
}

export default LoginPage
