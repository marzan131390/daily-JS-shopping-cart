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
function incrementOrDecrement(mobOrCovInputID, incrOrDecrNum, mobilPriID, mobOrCovPrice, mobPriID, covPriID, ) {
    let number = parseInt(mobOrCovInputID.value);
    let newNumber = number + incrOrDecrNum;
    mobOrCovInputID.value = newNumber;
    //Adding or Subtraction value for amount of price..
    price = parseFloat(mobilPriID.innerText);
    price = price + mobOrCovPrice;
    mobilPriID.innerText = price;
    //Calculating subtotal, vat and total value..
    let subAmount = parseFloat(mobPriID.innerText) + parseFloat(covPriID.innerText);
    subTotal.innerText = subAmount;
    let totalVatAmount = (subAmount * 5) / 100;
    vatAmount.innerText = totalVatAmount;
    let overallAmount = subAmount + totalVatAmount;
    totalAmount.innerText = overallAmount;
};

//Mobile Plus Button Event Handler Listener...
mobilePlusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, 1, mobilePrice, 1219, mobilePrice, coverPrice, );
});
//Mobile Minus Button Event Handler Listener...
mobileMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(mobileInput, -1,mobilePrice, -1219, mobilePrice, coverPrice, );
});
//Cover plus Button Event Handler listener...
coverPlusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, 1, coverPrice, 61, mobilePrice, coverPrice, );
});
//Mobile Minus Button Event Handler Listener...
coverMinusBtn.addEventListener("click", function() {
    incrementOrDecrement(coverInput, -1, coverPrice, -61, mobilePrice, coverPrice, );
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

