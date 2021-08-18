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
const b1Element = document.querySelector(".buy_one")
const checkElement = document.querySelector(".checkbtn");
const amountElement = document.querySelector(".the_amount_paid");
const paymentElement = document.querySelector(".payment");
const messageElement = document.querySelector(".message");
const menuElement = document.querySelector(".menu");
const buy1Element = document.querySelector(".buy_one");
const buy2Element = document.querySelector(".buy_two");
const buy3Element = document.querySelector(".buy_three");
const cashElement = document.querySelector(".cash")




var smallPizzaTotal = 0;
var mediumPizzaTotal = 0;
var largePizzaTotal = 0;
var totalCost = 0;
var quantity = 0;

sAddbuttonElement.addEventListener('click', smallPizzaAddCost);
function smallPizzaAddCost() {
    smallPizzaTotal += 49.25;
    totalCost += 49.25;
    q1Element.innerHTML = smallPizzaTotal / 49.25;
    priceTagElement.innerHTML = "R" + smallPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);


};
sMinbuttonElement.addEventListener('click', smallPizzaSubCost);
function smallPizzaSubCost() {
    smallPizzaTotal -= 49.25;
    totalCost -= 49.25;
    quantity = b1Element.innerHTML;
    if (smallPizzaTotal < 0) {
        smallPizzaTotal += 49.25;
        totalCost += 49.25;
        q1Element.innerHTML = 0;
        return;
    };
    q1Element.innerHTML = smallPizzaTotal / 49.25;
    priceTagElement.innerHTML = "R" + smallPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    
};

mAddbuttonElement.addEventListener('click', mediumPizzaAddCost);
function mediumPizzaAddCost() {
    mediumPizzaTotal += 89.75;
    totalCost += 89.75;
    q2Element.innerHTML = mediumPizzaTotal / 89.75;
    randsElement.innerHTML = "R" + mediumPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);
};
mMinbuttonElement.addEventListener('click', mediumPizzaSubCost);
function mediumPizzaSubCost() {
    mediumPizzaTotal -= + 89.75;
    totalCost -= 89.75;
    if (mediumPizzaTotal < 0) {
        mediumPizzaTotal += 89.75;
        totalCost += 89.75;
        q2Element.innerHTML = 0;
        return;
    };
    q2Element.innerHTML = mediumPizzaTotal / 89.75;
    randsElement.innerHTML = "R" + mediumPizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    
};

lAddbuttonElement.addEventListener('click', largePizzaAddCost);
function largePizzaAddCost() {
    largePizzaTotal += 129.50;
    totalCost += 129.50;
    q3Element.innerHTML = largePizzaTotal / 129.50;
    moneyDueElement.innerHTML = "R" + largePizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

};
lMinbuttonElement.addEventListener('click', largePizzaSubCost);
function largePizzaSubCost() {
    largePizzaTotal -= 129.50;
    totalCost -= 129.50;
    if (largePizzaTotal < 0) {
        largePizzaTotal += 129.50;
        totalCost += 129.50;
        q3Element.innerHTML = 0;
        return;
    };
    q3Element.innerHTML = largePizzaTotal / 129.50;
    moneyDueElement.innerHTML = "R" + largePizzaTotal.toFixed(2);
    totalAmountElement.innerHTML = "R" + totalCost.toFixed(2); 
};
checkElement.addEventListener('click', checkOutButton);
function checkOutButton() {
    amountElement.classList.remove("hide");
};
cashElement.addEventListener('click', payButton);
function payButton() {
    if (totalCost > paymentElement.value) {
        messageElement.innerHTML = "Sorry - That was not enough money!";
    } else if (totalCost < paymentElement.value) {
        messageElement.innerHTML = "Enjoy your pizzas!";
    }
};
buy1Element.addEventListener('click', lekkerbutton1);
function lekkerbutton1() {
    menuElement.classList.remove("hide");
    smallPizzaTotal = 49.25;
    totalCost += 49.25;
    q1Element.innerHTML = smallPizzaTotal / 49.25;
    priceTagElement.innerHTML = "R" + smallPizzaTotal;
    totalAmountElement.innerHTML = "R" + totalCost;
};
buy2Element.addEventListener('click', lekkerbutton2);
function lekkerbutton2() {
    menuElement.classList.remove("hide");
    mediumPizzaTotal = 89.75;
    totalCost += 89.75
    q2Element.innerHTML = mediumPizzaTotal / 89.75;
    randsElement.innerHTML = "R" + mediumPizzaTotal;
    totalAmountElement.innerHTML = "R" + totalCost;

};
buy3Element.addEventListener('click', lekkerbutton3);
function lekkerbutton3() {
    menuElement.classList.remove("hide");
    largePizzaTotal = 129.50;
    totalCost += 129.50;
    q3Element.innerHTML = largePizzaTotal / 129.50;
    moneyDueElement.innerHTML = "R" + largePizzaTotal;
    totalAmountElement.innerHTML = "R" + totalCost;
    


}

