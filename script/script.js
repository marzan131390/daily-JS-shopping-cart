//Define UI for the shopping cart package...
const mobileMinusBtn = document.getElementById("mobile-minus");
const mobilePlusBtn = document.getElementById("mobile-plus");
const mobileInput = document.getElementById("mobile-input");
const coverMinusBtn = document.getElementById("cover-minus");
const coverPlusBtn = document.getElementById("cover-plus");
const coverInput = document.getElementById("cover-input");
let mobilePrice = document.getElementById("mobile-price");
let coverPrice = document.querySelector("#cover-price");
const subTotal = document.getElementById("sub-total");
const vatAmount = document.getElementById("vat-amount");
const totalAmount = document.getElementById("total-amount");
const checkBtn = document.getElementById("checking-btn");

//Function for increment or decrement value in input...
function incrementOrDecrement(id, increment) {
    let number = parseInt(id.value);
    number = number + increment;
    id.value = number;
};
//Function for adding or subtraction amount of price..
function addingOrSubtraction(id, number) {
    price = parseFloat(id.innerText);
    price = price + number;
    id.innerText = price;
}

//Mobile Plus Button Event Handler Listener...
mobilePlusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, 1);
    addingOrSubtraction(mobilePrice, 1219);
    // let price = parseFloat(mobilePrice.innerText);
    // price = price + 1219;
    // mobilePrice.innerText = price;
});

//Mobile Minus Button Event Handler Listener...
mobileMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, -1);
    addingOrSubtraction(mobilePrice, -1219);
});

//Cover plus Button Event Handler listener...
coverPlusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, 1);
    addingOrSubtraction(coverPrice, 61);
});

//Mobile Minus Button Event Handler Listener...
coverMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, -1);
    addingOrSubtraction(coverPrice, -61);
});


