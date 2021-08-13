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



var smallPizzaTotal = 0;
var mediumPizzaTotal = 0;
var largePizzaTotal = 0;
var totalCost = 0;

sAddbuttonElement.addEventListener('click', smallPizzaAddCost);
function smallPizzaAddCost() {
    smallPizzaTotal += 49.89;
    totalCost += 49.89;
    priceTagElement.innerHTML = smallPizzaTotal;
    totalAmountElement.innerHTML = totalCost;

};
sMinbuttonElement.addEventListener('click', smallPizzaSubCost);
function smallPizzaSubCost() {
    smallPizzaTotal -= 49.89;
    totalCost -= 49.89;
    priceTagElement.innerHTML = smallPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (smallPizzaTotal < 0) {
        smallPizzaTotal += 49.89;
        totalCost += 49.89;
    };
    
};

mAddbuttonElement.addEventListener('click', mediumPizzaAddCost);
function mediumPizzaAddCost() {
    mediumPizzaTotal += 89.99;
    totalCost += 89.99;
    randsElement.innerHTML = mediumPizzaTotal;
    totalAmountElement.innerHTML = totalCost;
};
mMinbuttonElement.addEventListener('click', mediumPizzaSubCost);
function mediumPizzaSubCost() {
    mediumPizzaTotal -= 89.99;
    totalCost -= 89.99;
    randsElement.innerHTML = mediumPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (mediumPizzaTotal < 0) {
        mediumPizzaTotal += 89.99;
        totalCost += 89.99;
    };
    
};

lAddbuttonElement.addEventListener('click', largePizzaAddCost);
function largePizzaAddCost() {
    largePizzaTotal += 129.65;
    totalCost += 129.65;
    moneyDueElement.innerHTML = largePizzaTotal;
    totalAmountElement.innerHTML = totalCost;

};
lMinbuttonElement.addEventListener('click', largePizzaSubCost);
function largePizzaSubCost() {
    largePizzaTotal -= 129.65;
    totalCost -= 129.65;
    moneyDueElement.innerHTML = largePizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = totalCost.toFixed(2);
    if (largePizzaTotal < 0) {
        largePizzaTotal += 129.65;
        totalCost += 129.65;
    };
    
};

/*sAddbuttonElement.addEventListener("click", function() {
    alert(value)
})*/