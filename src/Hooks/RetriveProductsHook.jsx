import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../firebase";

const useRetriveProduct = ()=>{
    const [products , setProducts] = useState([]);
    const getProducts= async()=>{
        const productsArray=[];
        const allData =await getDocs(collection(fireStore,"products"));
        allData.forEach(item =>{
            const data = item.data();
            data.ID = item.id ;
            productsArray.push({
                ...data 
            })
            if(productsArray.length === allData.docs.length) {
               const products  = productsArray.filter(item => item.mainCategory !=="اعلانات");
               setProducts(products);
            }
        })
    }
    useEffect(()=>{
        getProducts()
    },[])


    return products;
};

export default useRetriveProduct ;