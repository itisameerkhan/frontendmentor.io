console.clear();
//input 
const billInput = document.getElementById('bill-input');
const customTip = document.getElementById('custom-tip-input');
const numberOfPeople = document.getElementById('number-of-people-input');
const buttons = document.querySelectorAll('.btn');   
const resetButton = document.getElementById('reset');



//output
const tipAmount = document.getElementById('tip-amount-h2');
const totalAmount = document.getElementById('total-amount-h2');

//customTip.addEventListener('click', calculateCustomTip);

resetButton.addEventListener('click',resetFunction);

billInput.oninput = function()
{
    if(numberOfPeople.value != ''  && (billInput !== '' || billInput <= 0))
    {
        console.log('bill input');
        calculate();
    }
}

numberOfPeople.oninput = function()
{
    if(numberOfPeople.value != ''  && (billInput !== '' || billInput <= 0))
    {
        console.log('number of people');
        calculate();
    }
}

buttons.forEach(button => {
    button.addEventListener('click',calculateTip)
})

function calculateTip()
{
    buttons.forEach(button => {
        button.classList.remove('active-button');
    })
    this.classList.add('active-button');
    if(numberOfPeople.value != '' && (billInput !== '' || billInput <= 0))
    {
        calculate();
    }
}


function calculate() 
{
    customTip.value = '';
    let totalBill = Number(billInput.value);
    let totalPeople = Number(numberOfPeople.value);
    let tipPercentage;
    let billPerPerson = totalBill / totalPeople;
    console.log(billPerPerson);
    let tipPerPerson = billPerPerson / tipPercentage;
    console.log(tipPerPerson);
    totalAmount.textContent = '$' + Number(billPerPerson).toFixed(2);
    buttons.forEach(button => {
        if(button.classList.contains("active-button"))
        {
            tipPercentage = button.value;
            let tip = (billPerPerson / 100) * Number(tipPercentage);
            tipAmount.textContent = '$' + tip.toFixed(2);
            billPerPerson += tip;
            totalAmount.textContent = '$' + Number(billPerPerson).toFixed(2);
        }
    })
}
customTip.oninput  = function()
{
    buttons.forEach(button => {
        button.classList.remove('active-button');
    })
    if(numberOfPeople.value != '' && (billInput !== '' || billInput <= 0))
    {
        let customTipValue = Number(customTip.value);
        let totalBill = Number(billInput.value);
        let totalPeople = Number(numberOfPeople.value);
        let tipPercentage;
        let billPerPerson = totalBill / totalPeople;
        console.log(billPerPerson);
        let tipPerPerson = (billPerPerson / 100) * customTipValue;
        tipAmount.textContent = '$' + tipPerPerson.toFixed(2);
        totalAmount.textContent = '$' + (billPerPerson + tipPerPerson).toFixed(2);
    }
}

function resetFunction()
{
    tipAmount.textContent = '$ 0.00';
    totalAmount.textContent = '$ 0.00'
}