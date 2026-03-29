// The Variables
const cost = document.getElementById("cost");
const liters = document.getElementById("liters");
const calculate = document.getElementById("calculate");
const displayamount = document.getElementById("displayamount");

// calculates the amount of litres you want
calculate.addEventListener("click", function(){
    const amount = parseFloat(liters.value)
    const price = parseFloat(cost.value)
    const total = amount * price;

    console.log(total)
    displayamount.textContent = "£" + total;
});

// allows u to input an amount of litres
liters.addEventListener("input", function(){
    calc(liters);
});
