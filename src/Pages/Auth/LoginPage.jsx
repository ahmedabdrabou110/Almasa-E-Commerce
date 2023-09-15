import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link,  } from 'react-router-dom'
import { Toaster,  } from 'react-hot-toast'
import useLogin from '../../Hooks/LoginHook'
const LoginPage = () => {
   const {email, password, setEmail , setPassword , handleLogin} = useLogin();
    return (
            <Container style={{ minHeight: "680px" }}>
                <Toaster />
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" >
                        <form className="d-flex flex-column " onSubmit={handleLogin} >
                            <label className="mx-auto title-login">تسجيل الدخول</label>
                            <input
                                placeholder="الايميل..."
                                type="text"
                                className="user-input my-3 text-center mx-auto"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="كلمه السر..."
                                type="password"
                                className="user-input text-center mx-auto"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button type='submit' className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        </form>
                        
                    </Col>
                    <label className="mx-auto my-4" style={{textAlign:"center"}}>
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                </Row>
            </Container>
    )
}

export default LoginPage
