import React from 'react'
import Navigation from '../../utility/Navigation'
import SubNav from '../../utility/SubNav'
import CarouselHome from '../../components/Home/CarouselHome'
import Ads from '../../components/Home/Ads'
import FreeDelivery from '../../components/Home/FreeDelivery'
import AdsColor from '../../components/Home/AdsColor'
import CardProductsContainer from '../../utility/CardProductsContainer'
import SubTitle from '../../utility/SubTitle'
import RateContainer from '../../components/Rate/RateContainer'
import Footer from '../../utility/Footer'
const HomePage = () => {
  return (
    <div>

        <CarouselHome />
        <Ads  />
        <FreeDelivery />
        <AdsColor />
        <SubTitle title="عبايات ملونه" />
        <CardProductsContainer />
        <SubTitle title="جديدنا" />
        <CardProductsContainer />
        <RateContainer />
    </div>
  )
}

export default HomePage