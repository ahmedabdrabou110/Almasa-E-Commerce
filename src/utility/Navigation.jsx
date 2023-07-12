import React , {useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo.jpg"
import {auth , fireStore} from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
// import { ShoppingCart, ShoppingCartIcon } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Login, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import useAllNumberOfCart from '../Hooks/GetNumberodItemsCart';
import shortid from 'shortid';

function Navigation() {
  const totalQty = useAllNumberOfCart();
  console.log(shortid.generate())
  const getCurrentUser = ()=>{
    // console.log(first)
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(fireStore, "users");
    useEffect(()=>{
      onAuthStateChanged(auth,(user) => {
        if(user) {
          getDocs(usersCollectionRef ,user.uid).then(snapshot => {
            const item = snapshot.docs.filter(email => email.data().id === user.uid);
            setUser(item[0].data().displayName)
          }).catch(error => {
            console.log("error")
          })
        }
        // console.log(user.email)
      })
    },[])

    return user ;
  }
  const user = getCurrentUser();

  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" width={120} height={120} style={{ borderRadius:"50%" }} />
        </Navbar.Brand>
        <Navbar.Toggle style={{maxHeight:"300px"}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto ml-auto my-2 text-white my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">تخفيضات</Nav.Link>
            <Nav.Link href="#action2">كل العبايات</Nav.Link>
            <Nav.Link href="#action1">عبايات ناعمة</Nav.Link>
            <Nav.Link href="#action2">عبايات مطرزة</Nav.Link>
            <Nav.Link href="#action1">عبايات سادة</Nav.Link>
            <Nav.Link href="#action2">عبايات ملونة</Nav.Link>
            <Nav.Link href="#action1">إكسسوارات</Nav.Link>
            <Nav.Link href="#action2">الجلابيات</Nav.Link>
            <Nav.Link href="#action2">عطورات</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex ml-10">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
           {user ? <><Link to="/user/profile">
            <h6 className='text-white flex items-center m-3'>{user}</h6>
           </Link>
           <Link to="/cart">
              <Badge className='m-4'  badgeContent={totalQty} color="error">
                <ShoppingCart color={"primary"} /> 
                <span className='text-white'>العربة</span>
              </Badge>
            </Link>
           </>:(<><Link to="/login" className="m-4">
           <Login color='primary'  />  
           <span className='text-white'>تسجيل دخول</span>         
           </Link>
           
           </> ) }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;