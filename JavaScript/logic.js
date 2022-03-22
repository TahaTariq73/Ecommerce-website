// Importing components
import { stickyNavbar , responsiveNav } from "./Components.js"

// This is for giving us heart
const like = document.getElementById('like');
like.addEventListener('click', (e) => {
    e.target.style.color = "red";
    e.target.style.textShadow = "0px 0px 6px red";
})

// This will change the text in forems
const formHeading = document.getElementById("exampleModalLabel"); 
let sclick = false;

const formSlider = document.getElementById('form-slider');
formSlider.addEventListener('click', (e) => {
    setTimeout(() => {
        if (sclick == false) {
            e.target.innerText = "Sign Up";
            formHeading.innerHTML = `<i class="fas fa-solid fa-user-tag" style="margin-right: 12px;"></i> Log In`;
            sclick = true;
        }
        else{
            e.target.innerText = "Log In";
            formHeading.innerHTML = `<i class="fas fa-solid fa-user-plus" style="margin-right: 12px;"></i> Sign Up`;
            sclick = false;
        }    
    }, 500);
})

// This will create the items divs for us in few lines
const items = document.getElementById('items');
const itemmsInfo = [
    {img: "buy-1", title: "Red printed-shirt", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-2", title: "A-88 Addidas", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", ""]},
    {img: "buy-3", title: "Flexible pajama", price: "199$", stars: ["-fill", "-fill", "-fill", "-fill", ""]},
    {img: "buy-4", title: "White jacket Addidas", price: "399$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
    {img: "buy-5", title: "Blue plane shirt", price: "199$", stars: ["-fill", "-fill", "-fill", "-half", ""]},
    {img: "buy-6", title: "Black shirt-Puma", price: "299$", stars: ["-fill", "-fill", "-fill", "-fill", "-half"]},
]

itemmsInfo.forEach(e => {
    let html = `
    <div class="item">
      <img src="Images/${e.img}.jpg" alt="" class="itemImg">
      <div class="item-detail">
        <h4>${e.title}</h4>
        <p>${e.price}</p>
        <div class="stars">
          <i class="bi bi-star${e.stars[0]}"></i>
          <i class="bi bi-star${e.stars[1]}"></i>
          <i class="bi bi-star${e.stars[2]}"></i>
          <i class="bi bi-star${e.stars[3]}"></i>
          <i class="bi bi-star${e.stars[4]}"></i>
        </div>
      </div> <br>
    </div>`
    items.innerHTML += html;
})

// This will create all list for footer
const footerList = document.getElementById('footer-list');
const lists = [{h1: "Sections", li1: "Home", li2: "Clothes", li3: "About us", li4: "Contact us"},
               {h1: "StoreLocations", li1: "Karachi", li2: "Lahore", li3: "Multan", li4: "Quetta"},
               {h1: "Selling", li1: "Clothes", li2: "Watches", li3: "Pants", li4: ""},
               {h1: "Owner", li1: "Taha Tariq", li2: "", li3: "", li4: ""}]

lists.forEach(e => {
    let html = `
        <ul>
            <h4>${e.h1}</h4>
            <li><a href="i">${e.li1}</a></li>
            <li><a href="i">${e.li2}</a></li>
            <li><a href="i">${e.li3}</a></li>
            <li><a href="i">${e.li4}</a></li>
        </ul>
    `
    footerList.innerHTML += html;
})

// This will take you to products page by clicking item
const itemImg = document.getElementsByClassName('itemImg');
for (let e of itemImg) {
    e.addEventListener('click', () => {
        window.location = "products.html";
    })
}

// This will make the navBar sticky
const nav = document.getElementById('nav');
const mainNav = document.getElementById('home');
const animateSay = document.getElementsByClassName('animate-say');
const dropMenu = document.getElementById('dropMenu');
let giveMargin = false;
stickyNavbar(nav, mainNav, dropMenu, giveMargin);

// This will drop responsive navbar
const Menu = document.getElementById('Menu');
responsiveNav(Menu, dropMenu);

// For animating testimonials
window.addEventListener('scroll', () => {
    if (window.scrollY > 2050) {
        Array.from(animateSay).forEach((element, index) => {
            if (index == 0) {
                element.style.position = "relative";
                element.style.animation = "animate-say1 1s";
                element.style.display = "flex";
                element.style.right = "0%";
            }
            else{
                element.style.animation = "animate-say2 1s";
                element.style.position = "relative";
                element.style.display = "flex";
                element.style.left = "0%";
            }
        })
    }
})

// Validating form
const nameRegex = /^([a-zA-Z0-9]){3}/;
const emailRegex = /([a-zA-Z0-9]){5}@gmail\.com$/;
const passwordRegex = /^[A-Z]([a-zA-Z0-9]){6}[0-9]$/;

function Validation(element, matching, txt){
    if (matching == true) {
        element.style.borderColor = "rgb(45, 27, 110)";
        element.parentElement.children[0].style.color = "rgb(45, 27, 110)";
        if (element.parentElement.children.length == 3) {
            element.parentElement.removeChild(element.parentElement.children[2]);            
        }
    }
    else{
        element.style.borderColor = "red";
        element.parentElement.children[0].style.color = "red";

        if (element.parentElement.children.length == 2) {
            let div = document.createElement('div');
            div.innerHTML += `
                <div style="margin-left: 2.2rem; color: red; font-size: 14px; position: absolute; margin-top: -20px;">
                    ${txt}
                </div>`;
            element.parentElement.append(div);   
        }
    }
}

const L1 = document.getElementById('loginInput1');
const L2 = document.getElementById('loginInput2');
const S1 = document.getElementById('signInput1');
const S2 = document.getElementById('signInput2');
const S3 = document.getElementById('signInput3');

const InputTags = [
    {element: L1, reg: nameRegex, txt: "The name must contain more than 3 letters"},
    {element: L2, reg: passwordRegex, txt: "1st alphabet must be capital and last must be number"},
    {element: S1, reg: nameRegex, txt: "The name must contain more than 3 letters"},
    {element: S2, reg: emailRegex, txt: "Enter valid email pattern"},
    {element: S3, reg: passwordRegex, txt: "1st alphabet must be capital and last must be number"},
];
InputTags.forEach(e => {
    e.element.addEventListener('blur', () => {
        Validation(e.element, e.reg.test(e.element.value), e.txt);
    })
})

const submitModal = document.getElementById('submitModal');
submitModal.addEventListener('click', () => {
    if ((L1.innerText != null && L1.childNodes.length != 3) && (L2.innerText != null && L2.childNodes.length != 3)) {
        alert('Your pin code is 76892');
    }
    else if ((S1.innerText != null && S1.childNodes.length != 3) && (S2.innerText != null && S2.childNodes.length != 3) && (S3.innerText != null && S3.childNodes.length != 3)) {
        alert('Your pin code is 76892');
    }
})