const topPage = document.querySelector("#top-page");
const listing1 = document.querySelector(".listing1");
const listing2 = document.querySelector(".listing2");
const listing3 = document.querySelector(".listing3");
const listing4 = document.querySelector(".listing4");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const form = document.querySelector(".form");
const submit = document.querySelector("#submit");
const log = document.querySelector("#log");
const shoppingCart = document.querySelector("#shopping-cart");
const addBtn = document.querySelectorAll(".add-btn");


listing1.addEventListener("click", () =>{
    text1.classList.toggle("text1");
})

listing2.addEventListener("click", () =>{
    text2.classList.toggle("text2");
})

listing3.addEventListener("click", () =>{
    listing4.classList.toggle("listing4");
})
console.log(addBtn.length)
for(let i=0; i<addBtn.length; i++){
    let btn = addBtn[i]
    btn.addEventListener("click", function(event){
        let buttonClicked = event.target
        let parent=buttonClicked.parentElement.querySelector(".price-float")
        const price = parseFloat(parent.innerText);
        const cartCostElement = document.querySelector("#cart-total-cost");
        const prevValue = parseFloat(cartCostElement.innerText)
        console.log({parent, prevValue, price})

        cartCostElement.innerText = (prevValue + price)
        // buttonClicked.parentElement.parentElement.add()
        //updateCartTotal()

    })
} 

/*function updateCartTotal() {
    let cartItemContainer = document.querySelector(".cart")
    let products = cartItemContainer = cartItemContainer.querySelector(".products")
    let shoppingCart= 0
    for(let i=0; i<products.length; i++){
        let product = products[i]
        let priceElement = product.querySelector(".jollof-price")
        let quantityElement = product.querySelector(".product-quantity")
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity=quantityElement.value
        shoppingCart= shoppingCart +(price * quantity)
    }
}*/

function login(event){
    log.textContent =`Welcome. Your table is reserved.`; event.preventDefault();
}
    form.addEventListener("submit", login);



 




