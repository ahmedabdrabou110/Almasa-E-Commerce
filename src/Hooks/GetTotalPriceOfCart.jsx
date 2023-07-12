import useGetDataFromCart from "./GetDataFromCart"

const useGetTotalPrice = ()=>{
    const cartProduct = useGetDataFromCart();
    const cartTotalPrice = cartProduct.map(item => {
        return item.totalPrice;
    }) ;

    const totalPrice =cartTotalPrice.reduce((acc, curr) => acc + curr , 0);

    return totalPrice ;

}

export default useGetTotalPrice ; 