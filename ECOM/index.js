import { products } from "./db/product.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".side-bar");
let cart = JSON.parse(localStorage.getItem("cart")) || [];








productContainer.addEventListener("click", (event) =>{
    const isProductInCart = findProductInCart(cart, event.target.dataset.id)
    event.preventDefault();
    if(!isProductInCart){
        const productToAddToCart = products.filter(
            ({_id}) => _id === event.target.dataset.id);
        cart= [...cart, ...productToAddToCart];
        localStorage.setItem("cart", JSON.stringify(cart));
        const cartButton = event.target;
        cartButton.innerHTML = "Go To Cart <span class ='material-icons-outlined'>shopping_cart</span>"
    }else{
        location.href = "cart.html";
    }
    
});

filterContainer.addEventListener("click", (event)=> {
    const updateProducts = products.filter(({rating}) => rating >= Number(event.target.dataset.rating));
    productContainer.innerText="";
    createProductCard(updateProducts, 
        productContainer, 
        findProductInCart, "products");

})

createProductCard(products, productContainer, findProductInCart, "products");