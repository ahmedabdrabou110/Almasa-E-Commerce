import { Star } from '@mui/icons-material'
import { collection } from 'firebase/firestore'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { fireStore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import useCurrentId from '../../Hooks/CurrentIdUserHook'

const RateItem = ({item}) => {
    const uid = useCurrentId()
    const collectionRef = collection(fireStore , "users");
    const data = useCollectionData(collectionRef)[0];
    
  return (
    <div>
            <Row className="mt-3">
                <Col className="d-felx me-5 mt-3">
                    <div className="rate-name  d-inline ms-2">{item.Name}</div>
                    <Star color='warning'/>
                    <div className="cat-rate  d-inline  p-1 pt-2">{item.rate}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {item.message}
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default RateItem