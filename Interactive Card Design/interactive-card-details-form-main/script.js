const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const displayMonth = document.querySelector('#display-mm');
const displayYear = document.querySelector('#display-yy');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('#form');
const userDetails = document.querySelector('.user-details');

const cardHolderName = document.querySelector('#cardholdername');
const inputCardNumber = document.querySelector('#input-cardnumber');
const mm = document.querySelector('#mm');
const yy = document.querySelector('#yy');
const inputcvv = document.querySelector('#input-cvv');
const thankYou = document.querySelector('.thank-you');

console.log(cardHolderName.innerText);
form.addEventListener('submit', (e) => {
    if(validateFunction()) {
        displayFunction();
    }
    e.preventDefault();
});

cardHolderName.addEventListener('keyup',()=> {
    cardName.textContent = (cardHolderName.value).toString().toUpperCase();
});


inputCardNumber.addEventListener('keyup', ()=> {
    cardNumber.textContent = inputCardNumber.value;
});

mm.addEventListener('keyup',()=>{
    displayMonth.textContent = mm.value;
});

yy.addEventListener('keyup',()=> {
    displayYear.textContent = yy.value;
});

inputcvv.addEventListener('keyup', ()=> {
    cvv.textContent = inputcvv.value;
});

setInterval(()=> {
    if(inputCardNumber.value === '') cardNumber.textContent = '0000 0000 0000 0000';
    if(cardHolderName.value === '') cardName.textContent = 'JANE APPLESEED';
    if(displayMonth.value === '') displayMonth.value = '00';
    if(displayYear.value === '') displayYear.value = '00';
},500);

function validateFunction() {

    let success = true;
    if(cardHolderName.value === '')
    {
        setError(cardHolderName,`can't be blank`);
        success = false;
    }
    else if(cardHolderName.value.toString().length > 20) {
        setError(cardHolderName,`can't more than 20 characters`)
        success = false;
    }
    else setSuccess(cardHolderName);

    if(inputCardNumber.value.toString().length != 19)
    {
        setError(inputCardNumber,`can't be blank or more/less than 16 digits`);
        success = false;
    }
    else if(inputCardNumber.value.toString().includes(' ') === false) {
        success  = false;
        setError(inputCardNumber,'invalid number')
    }
    else setSuccess(inputCardNumber);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear() % 100;
    //console.log(currentMonth + " " + currentYear);

    const year = yy.value - currentYear;
    if(year < 0) {
        setError(yy,'card expired');
        success = false;
    }
    else setSuccess(yy);

    const month = mm.value - currentMonth;
    if(month <= 0 && year == 0) {
        setError(yy,'card expired');
    }

    if(inputcvv.value === '') {
        setError(inputcvv,'invalid cvv');
        success = false;
    }
    else setSuccess(inputcvv);
    return success; 
}
function setError(element,message) {
    const parent = element.parentElement;
    parent.classList.add('error');
    const errorElement = parent.querySelector('#error');
    errorElement.innerText = message;
}
function setSuccess(element) {
    const parent = element.parentElement;
    parent.classList.remove('error');
    const errorElement = parent.querySelector('#error');
    errorElement.innerText = '';
}

function displayFunction() {
    for(const child of userDetails.children) {
        userDetails.removeChild(child);
    }
    const thankYou = document.createElement('div');
    thankYou.className = "thank-you";
    
    const tick = document.createElement('div');
    tick.id = 'tick';
    tick.innerHTML = '✓';
    let divInside = document.createElement('div');

    let txt = document.createElement('h2');
    txt.innerHTML = 'THANK YOU';
    txt.id = 'txt';

    let content = document.createElement('p');
    content.innerHTML = `we've added your card details`;
    content.id = 'content';

    let btn = document.createElement('button');
    btn.id = 'continue';
    btn.textContent = 'Continue';
    thankYou.appendChild(tick);
    thankYou.appendChild(txt);
    thankYou.appendChild(content);
    thankYou.appendChild(btn);
    userDetails.appendChild(thankYou);
}