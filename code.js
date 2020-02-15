const total = document.querySelector('#total');
const tip = document.querySelector('#tip');
const rate = document.querySelector('#rate');
const tax = document.querySelector('#tax');
const grandtotal = document.querySelector('#grandtotal');
const btn = document.querySelector('#btn');


btn.addEventListener("click", calc);

function calc(){

    // e.preventDefault();
    let calctip = rate.value*total.value/100.0;
    tip.textContent = 'Tip: $' + calctip;
    calctotal = (rate.value*total.value/100.0)+Number(total.value)+5.50;
    grandtotal.textContent = 'Grand Total: $'+ calctotal;
}

