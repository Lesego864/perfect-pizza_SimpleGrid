const sAddbuttonElement = document.querySelector(".add1button");
const sMinbuttonElement = document.querySelector(".min1button");
const mAddbuttonElement = document.querySelector(".Add2button");
const mMinbuttonElement = document.querySelector(".Min2button");
const lAddbuttonElement = document.querySelector(".ADD3button");
const lMinbuttonElement = document.querySelector(".MIN3button");
const priceTagElement = document.querySelector(".price_tag");
const randsElement = document.querySelector(".rands")
const moneyDueElement = document.querySelector(".money_due")
const totalAmountElement = document.querySelector(".full_amount");
const q1Element = document.querySelector(".Q1");
const q2Element = document.querySelector(".Q2");
const q3Element = document.querySelector(".Q3");



var smallPizzaTotal = 0;
var mediumPizzaTotal = 0;
var largePizzaTotal = 0;
var totalCost = 0;
var quantity = 0;

sAddbuttonElement.addEventListener('click', smallPizzaAddCost);
function smallPizzaAddCost() {
    smallPizzaTotal += 49.50;
    totalCost += 49.50;
    q1Element.innerHTML = smallPizzaTotal / 49.50;
    priceTagElement.innerHTML = smallPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);


};
sMinbuttonElement.addEventListener('click', smallPizzaSubCost);
function smallPizzaSubCost() {
    smallPizzaTotal -= 49.50;
    totalCost -= 49.50;
    q1Element.innerHTML = smallPizzaTotal * 49.50;
    priceTagElement.innerHTML = smallPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (smallPizzaTotal < 0) {
        smallPizzaTotal += 49.50;
        totalCost += 49.50;
        return;
    };

    
};

mAddbuttonElement.addEventListener('click', mediumPizzaAddCost);
function mediumPizzaAddCost() {
    mediumPizzaTotal += 89.50;
    totalCost += 89.50;
    q2Element.innerHTML = mediumPizzaTotal / 89.50;
    randsElement.innerHTML = mediumPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
};
mMinbuttonElement.addEventListener('click', mediumPizzaSubCost);
function mediumPizzaSubCost() {
    mediumPizzaTotal -= 89.45;
    totalCost -= 89.45;
    q2Element.innerHTML = smallPizzaTotal * 89.50;
    randsElement.innerHTML = mediumPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (mediumPizzaTotal < 0) {
        mediumPizzaTotal += 89.50;
        totalCost += 89.50;
        return;
    };

    
};

lAddbuttonElement.addEventListener('click', largePizzaAddCost);
function largePizzaAddCost() {
    largePizzaTotal += 129.50;
    totalCost += 129.50;
    q3Element.innerHTML = largePizzaTotal / 129.50;
    moneyDueElement.innerHTML = largePizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);

};
lMinbuttonElement.addEventListener('click', largePizzaSubCost);
function largePizzaSubCost() {
    largePizzaTotal -= 129.50;
    totalCost -= 129.50;
    q3Element.innerHTML = largePizzaTotal * 129.50;
    moneyDueElement.innerHTML = largePizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (largePizzaTotal < 0) {
        largePizzaTotal += 129.50;
        totalCost += 129.50;
        return;
    };


    
};

/*sAddbuttonElement.addEventListener("click", function() {
    alert(value)
})*/