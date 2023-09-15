import React , {useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo.jpg"
import {auth , fireStore} from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
// import { ShoppingCart, ShoppingCartIcon } from '@mui/icons-material';
import { Badge, Box } from '@mui/material';
import { Login, ShoppingCart } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import useAllNumberOfCart from '../Hooks/GetNumberodItemsCart';
import shortid from 'shortid';

function Navigation() {
  const totalQty = useAllNumberOfCart();
  const getCurrentUser = ()=>{
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
  const getRoleAdmin = ()=>{
    const [admin, setAdmin] = useState("")
    const usersCollectionRef = collection(fireStore, "users");
    useEffect(()=>{
      onAuthStateChanged(auth,(user) => {
        if(user) {
          getDocs(usersCollectionRef ,user.uid).then(snapshot => {
            const item = snapshot.docs.filter(email => email.data().id === user.uid);
            if(item[0]?.data()?.auth === "admin"){
              setAdmin(item[0].data().auth);
            }
          }).catch(error => {
            console.log("error")
          })
        }
        
      })
    },[])

    return admin ;
  }
  const getRoleUser = ()=>{
    const [userRole, setUserRole] = useState("")
    const usersCollectionRef = collection(fireStore, "users");
    useEffect(()=>{
      onAuthStateChanged(auth,(user) => {
        if(user) {
          getDocs(usersCollectionRef ,user.uid).then(snapshot => {
            const item = snapshot.docs.filter(email => email.data().id === user.uid);
            if(item[0]?.data()?.auth === "user"){
              setUserRole(item[0]?.data()?.auth);
            }
          }).catch(error => {
            console.log("error")
          })
        }
        
      })
    },[])

    return userRole ;
  }
  const user  = getCurrentUser();
  const userRole = getRoleUser();
  const admin = getRoleAdmin();

  const NavStyle =({isActive})=>{
    return {
      backgroundColor: isActive? "gray" : "transparent",
      color: isActive? "black" : "white",
      borderRadius: isActive?"5px":"0px"
    }
  }
  return (
    <Navbar  expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" width={120} height={120} style={{ borderRadius:"50%" }} />
        </Navbar.Brand>
        <Navbar.Toggle style={{maxHeight:"300px"}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Box flex={1}/>
          <Nav className="me-auto ml-auto my-2 text-white my-lg-0" style={{ maxHeight: '100px'}} navbarScroll>
          <NavLink style={NavStyle} className="nav-link" to="/المنتجات المضافة حديثا">المنتجات المضافة حديثا</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/عبايات سوداء"> عبايات سوداء</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/عبايات ملونه"> عبايات ملونه</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/عبايات مناسبات"> عبايات مناسبات</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/عبايات سفر"> عبايات سفر</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/عبايات البشت و الفرشة"> عبايات البشت و الفرشه</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/النقابات و الطرح">النقابات و الطرح</NavLink>
            <NavLink style={NavStyle} className="nav-link" to="/التشكيلة الشتوية">التشكيلة الشتوية</NavLink>
            
          </Nav>
            {/* <Form className="d-flex ml-10">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            <Box flex="1" />
            {admin && <Link to="/admin/allproducts" className='btn btn-secondary'>
                Dashboard 
                </Link> 
            }
            {userRole && <Link to="/user/profile" className='btn btn-secondary'>
                Dashboard 
                </Link> 
            }

           {user ? <><Link to="/user/profile">
            <h6 className='text-white flex items-center m-1'>{user}</h6>
           </Link>
           <Link to="/cart">
              <Badge className='m-4'  badgeContent={totalQty} color="error">
                <ShoppingCart color={"primary"} /> 
                <span className='text-white'>العربة</span>
              </Badge>
            </Link>
           </>:(<><Link to="/login" className="m-1">
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