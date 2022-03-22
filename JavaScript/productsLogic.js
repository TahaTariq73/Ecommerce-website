// Import components
import { stickyNavbar , responsiveNav } from "./Components.js"

// This will make the navbar sticky
const nav = document.getElementById('nav');
const mainNav = document.getElementById('home');
const dropMenu = document.getElementById('dropMenu');
let giveMargin = true;
stickyNavbar(nav, mainNav, dropMenu, giveMargin);

// For responsive navbar
const Menu = document.getElementById('Menu');
responsiveNav(Menu, dropMenu);

// The will make the product divs in few lines :)
const products = document.getElementById('products');
const productsInfo = [
    {img: "buy-1", title: "Red printed-shirt", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-2", title: "A-88 Addidas", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", ""]},
    {img: "buy-3", title: "Flexible pajama", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", ""]},
    {img: "buy-4", title: "White jacket Addidas", price: "399$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-5", title: "Blue plane shirt", price: "199$", stars: ["-fill", "-fill", "-fill", "-half", ""]},
    {img: "buy-14", title: "Black shirt-Puma", price: "299$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-8", title: "Gray nikki shoes", price: "299$", stars: ["-fill", "-fill", "-fill", "-fill", ""]},
    {img: "buy-9", title: "HR shocks", price: "99$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-10", title: "A-34 Rolex watch", price: "499$", stars: ["-fill", "-fill", "-fill", "-fill", "-fill"]},
    {img: "buy-11", title: "73 atmaster watch", price: "999$", stars: ["-fill", "-fill", "-fill", "-fill", "-fill"]},
    {img: "buy-12", title: "Red bloody shoes", price: "1199$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-13", title: "Nikki home shoes", price: "189$", stars: ["-fill", "-fill", "-fill", "-half", ""]},
]

productsInfo.forEach(e => {
    let html = `
        <div class="item">
            <img src="Images/${e.img}.jpg" alt="" class="itemImg">
            <div class="item-detail">
              <h4>${e.title}</h4>
              <p>${e.price}</p>
              <div style="display: flex; justify-content: space-between;">
                <div class="stars">
                  <i class="bi bi-star${e.stars[0]}"></i>
                  <i class="bi bi-star${e.stars[1]}"></i>
                  <i class="bi bi-star${e.stars[2]}"></i>
                  <i class="bi bi-star${e.stars[3]}"></i>
                  <i class="bi bi-star${e.stars[4]}"></i>
                </div>
                <div class="pop-btn" title="Add to cart"><i class="bi bi-cart-fill"></i></div>
              </div>
              </div> <br>
          </div>
    `
    products.innerHTML += html;
})

// This popUp the div for adding cart 
const popUp = document.getElementById('pop-up');
const popBtns = document.getElementsByClassName('pop-btn');
const popPrice = document.getElementById('$2');
let itemName;

for (let e of popBtns) {
    e.addEventListener('click', () => {
        popUp.style.display = "block";
        popUp.style.animation = "animation-Pop 0.7s";
        popUp.style.top = "50%";
        popUp.style.opacity = "1";
        popPrice.value = e.parentNode.parentNode.childNodes[3].innerText;
        itemName = e.parentNode.parentNode.children[0].innerText;
    })
    
    const popClose = document.getElementById('pop-close');
    popClose.addEventListener('click', () => {
        popUp.style.animation = "close-Pop 0.7s";
        popUp.style.top = "15%";
        popUp.style.opacity = "0";
    })    
}

// Throwing messages
const toastBody = document.getElementById('toast-body');
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        toastBody.innerText = "You need to go home then go to this option for Log In.";
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

const popSubmit = document.getElementById('pop-submit');
if (popSubmit) {
    popSubmit.addEventListener('click', function () {
        toastBody.innerText = "Added to your cart.";
        var toast = new bootstrap.Toast(toastLiveExample)
  
        toast.show()
    })
}  

const input1 = document.getElementById('$1');
const input2 = document.getElementById('$2');

popSubmit.addEventListener('click', () => {
    let obj = {
        nameI : itemName,
        quantity : `${input1.value}x`,
        price : input2.value   
    }
    console.log(input1);

    let productsI = localStorage.getItem('productsI');
    let productI;
    if (productsI == null) {
        productI = [];
    }
    else{
      productI = JSON.parse(productsI); 
    }

    productI.push(obj);
    localStorage.setItem("productsI", JSON.stringify(productI));
})
