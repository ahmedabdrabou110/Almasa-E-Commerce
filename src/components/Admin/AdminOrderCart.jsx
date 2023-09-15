import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { fireStore } from '../../firebase';
import { useParams, useSearchParams } from 'react-router-dom';
import useCurrentId from '../../Hooks/CurrentIdUserHook';

const AdminOrderCart =  () => {
    const param = useParams();
  const   [searchParam , setSearchParm] = useSearchParams();
  
  const uid = useCurrentId()
  
  const [data, setData] = useState([]);
  useEffect( ()=>{
    const fetchData =async ()=>{
     const querySnapshot =  await getDocs(collection(fireStore , `Buyer-cart${param.id}`));
     const documents = querySnapshot.docs.map((doc) => doc.data().data).filter(item => searchParam.get("product") === item?.productId);
     setData(documents);
    }
     fetchData()
  },[])
 
  
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="120px" height="160px" style={{margin:"10px" , borderRadius:"8px"}} src={data[0]?.image} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{data[0]?.title}</div>
                
              
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {data[0]?.description}              
              </div>
              <div className="d-inline pt-2 cat-rate me-2">4.5</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الخامة :</div>
              <div className="barnd-text d-inline mx-1">{data[0]?.brand} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الحالة :</div>
              <div className="barnd-text d-inline mx-1">{data[0]?.state} </div>
            </Col>
          </Row>
          <Row>
            
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
              <div className='product-text quantity-box' style={{width:"100px"}}>
                             
                <div style={{marginLeft:"auto" , marginRight:"auto"}}>{data[0]?.qty}</div>               
                
              </div>
              </div>
              <div className="d-inline pt-2 barnd-text">{data[0]?.totalPrice} ر.س</div>
            </Col>

          </Row>
        </div>
      </Col>
  )
}

export default AdminOrderCart