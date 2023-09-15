import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { auth, fireStore } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import shortid from "shortid";

const AdminAddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleForm = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password, role);
    

    const collectionRef = collection(fireStore , "users");
        addDoc(collectionRef,{
          id:shortid.generate(),
          displayName:`${firstName} ${lastName}` , 
          Email:email , 
          Password:password,
          auth:role
        }).then(()=>{
          toast.success(" تم إنشاء الحساب  بنجاح من قبل الادمن ")
          setLastName("")
          setFirstName("")
          setEmail("")
          setPassword("")
          
        }).catch(error=>{
          toast.error("حدث خطا ما ");
        })
    
  }
  return (
    <Form style={{ padding: "20px", height: "678px" }} onSubmit={handleForm} >
        <Toaster />
      <Row>
        <Col>
          <Form.Label>الاسم الاول</Form.Label>
          <Form.Control
            placeholder="ادخل الاسم الاول "
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>الاسم الاخير</Form.Label>
          <Form.Control
            placeholder="ادخل الاسم الاخير"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ايميل العميل</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>باسورد العميل</Form.Label>
        <Form.Control
          type="password"
          placeholder="ادخل باسورد العميل"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>دور العميل</Form.Label>
        <Form.Select
          aria-label="Default select example"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>.........</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </Form.Select>
      </Form.Group>
      <Row>
        <Col sm="8" className="d-flex justify-content-center p-2 ">
          <button type="submit" className="btn-save btn-block d-inline mt-2 ">
            إضافة عميل
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default AdminAddUser;
