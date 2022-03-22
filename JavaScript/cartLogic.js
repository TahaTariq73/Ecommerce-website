// Making divs of cart items
const tableBody = document.getElementById('table-body');

let tableItems = localStorage.getItem('productsI');
JSON.parse(tableItems).forEach((e, index) => {
    let element = document.createElement('tr');
    element.innerHTML = `
        <td>${index+2}</td>
        <td>${e.nameI} - ${e.price}</td>
        <td>${e.quantity}</td>
        <td class="del-row" id="$${index}"><i class="bi bi-x-lg"></i></td>
    `
    tableBody.append(element);
});

// For deleting the products that buyer added
for (let i = 0; i < JSON.parse(tableItems).length; i++) {
    let e = document.getElementById(`$${i}`);
    e.addEventListener('click', () => {
        e.parentElement.innerHTML = "";

        let productsI = localStorage.getItem('productsI');
        let productI;
        if (productsI == null) {
            productI = [];
        }
        else{
            productI = JSON.parse(productsI); 
        }

        productI.splice(i, 1);
        localStorage.setItem("productsI", JSON.stringify(productI));
    })
}

// Pincode logic
let regex = /76892/;
const toastBody = document.getElementById('toast-body');
var toastTrigger = document.getElementById('liveToastBtn');
var toastLiveExample = document.getElementById('liveToast');

const pincodeInput = document.getElementById('*6');
const pinBtn = document.getElementById('pin-btn');
pinBtn.addEventListener('click', () => {
    if (regex.test(pincodeInput.value)) {
    if (pinBtn) {
        pinBtn.addEventListener('click', function () {
            toastBody.innerText = "Thank for shopping.We will items in just 4 days";
            var toast = new bootstrap.Toast(toastLiveExample)
  
            toast.show()
        })
    }  
    }
})