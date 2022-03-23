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
const firstRemove = document.getElementById("first-remove");
const secondRemove = document.getElementById("second-remove")
// let removeItem = document.querySelectorAll(".remove-item");


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
};
//Function for subTotal Amount....
function subTotalAmount(mId, cId) {
    let subAmount = parseFloat(mId.innerText) + parseFloat(cId.innerText);
    subTotal.innerText = subAmount;
    let totalVatAmount = (subAmount * 5) / 100;
    vatAmount.innerText = totalVatAmount;
    let overallAmount = subAmount + totalVatAmount;
    totalAmount.innerText = overallAmount;
}
//Mobile Plus Button Event Handler Listener...
mobilePlusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, 1);
    addingOrSubtraction(mobilePrice, 1219);
    subTotalAmount(mobilePrice, coverPrice);
});
//Mobile Minus Button Event Handler Listener...
mobileMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, -1);
    addingOrSubtraction(mobilePrice, -1219);
    subTotalAmount(mobilePrice, coverPrice);
});
//Cover plus Button Event Handler listener...
coverPlusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, 1);
    addingOrSubtraction(coverPrice, 61);
    subTotalAmount(mobilePrice, coverPrice);
});
//Mobile Minus Button Event Handler Listener...
coverMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, -1);
    addingOrSubtraction(coverPrice, -61);
    subTotalAmount(mobilePrice, coverPrice);
});

//Remove item when clicked..
firstRemove.addEventListener("click", function(event) {
    let parentEl = event.target.parentNode.parentNode;
    parentEl.remove();
});
secondRemove.addEventListener("click", function(event) {
    let parentEl = event.target.parentNode.parentNode;
    parentEl.remove();
});

