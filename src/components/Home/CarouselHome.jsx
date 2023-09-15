import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from "../../assets/carousel1.jpg"
import {collection, getDocs} from "firebase/firestore";
import { fireStore } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const CarouselHome = () => {
  const collectionRef = collection(fireStore , "ads");
  const [data , loading, error] = useCollectionData(collectionRef);
  console.log(data);
  return (
    <Carousel>
      {loading && (<h1>من فضلك انتظر </h1>)}
      {!loading && (data?.map(item => (
        <Carousel.Item key={item?.id}>
        <img
            className="d-block w-100"
            src={item?.image}
            alt="First slide"
          />
  
          
        </Carousel.Item>
      )))}
      
    </Carousel>
  )
}

export default CarouselHome