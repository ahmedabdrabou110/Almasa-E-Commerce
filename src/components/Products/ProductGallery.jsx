import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Product1 from '../../assets/product1.jpg'
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import useRetriveProduct from '../../Hooks/RetriveProductsHook';
import { useParams } from 'react-router-dom';
const ProductGallery = () => {
    const products =  useRetriveProduct();
    const param = useParams();
    console.log(param.id)
    const product = products.filter(item => item.productId === param.id);
    
    // console.log(image)
    
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            {/* <ImageGallery items={images}
                defaultImage={Product1}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}

            /> */}
            <img width="100%" height="100%" src={product[0]?.image}  />
        </div>
    )
}

export default ProductGallery
