import useGetDataFromCart from "./GetDataFromCart"

const useAllNumberOfCart = ()=>{
    const cartProduct = useGetDataFromCart();    
    const qty = cartProduct.map(item => {
        return item.qty;
    });

    const totalQty = qty.reduce((acc , curr) => acc + curr , 0);

    return totalQty ;
}



export default useAllNumberOfCart ; 