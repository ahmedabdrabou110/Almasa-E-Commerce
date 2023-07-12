import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RateItem from './RateItem'
import { Star } from '@mui/icons-material'
import Pagination from '../../utility/Pagination'
import BasicRating from '../Products/RateStar'
import RatePost from '../Products/RatePost'
import { collection } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import {useCollectionData} from "react-firebase-hooks/firestore"
const RateContainer = () => {
  const collectionRef = collection(fireStore , "comments");
  const allComments = useCollectionData(collectionRef)[0];
  console.log(allComments)
  return (
    <Container  className='rate-container'>
            <RatePost />
            {
              allComments?.map(item => (
                <RateItem key={item.id} item={item} />
              ))
            }
            {/* <Pagination /> */}
        </Container>
  )
}

export default RateContainer