
const total = document.querySelector('#total');
const tip = document.querySelector('#tip');
const rate = document.querySelector('#rate');
// const tax = document.querySelector('#tax');
const grandtotal = document.querySelector('#grandtotal');
const btn = document.querySelector('#btn');


btn.addEventListener("click", calc);

function calc(){
    if (total.value=='' || rate.value==''||total.value<=0||rate.value<0){
        if (total.value== ''){
            alert('Please Enter Total Value');
        }
        else if(total.value<=0){
            alert('Total value should be above zero');
        }
        if (rate.value== ''){
            alert('Please Enter Rate Value');
        }
        else if (rate.value<0){
            alert('Rate value shouldn\'t be negative value');
        }
    }
    else{
    let calctip = rate.value*total.value/100.0;
    tip.textContent = 'Tip: $' + calctip;
    calctotal = (rate.value*total.value/100.0)+Number(total.value)+(0.05*total.value);
    grandtotal.textContent = 'Grand Total: $'+ calctotal;
    }
}

