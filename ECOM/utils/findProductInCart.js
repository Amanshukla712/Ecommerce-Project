export const findProductInCart = (cart,prodid) =>{
    const isProductInCart = 
    cart && cart.length > 0 && cart.some(({_id}) => _id ===prodid);
    return isProductInCart;
}