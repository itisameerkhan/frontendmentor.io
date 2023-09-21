const buttons = document.querySelectorAll('.button-container button');
const submit = document.querySelector('#submit-button');
const container = document.querySelector('.container');
let buttonValue = 0;

buttons.forEach(button => {
    button.addEventListener('click',() => { 
        removeClickedFunction();
        button.classList.add('clicked');
        buttonValue = button.value;
    });
})

function removeClickedFunction()
{
    buttons.forEach(button => {
        button.classList.remove('clicked');
    })
}

submit.addEventListener('click',()=>{
    removeChildFunction();
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const image = document.createElement('img');
    image.setAttribute('src','/interactive-rating-component-main/images/illustration-thank-you.svg');
    imgContainer.appendChild(image);
    container.appendChild(imgContainer);

    const rating = document.createElement('div')
    rating.classList.add('rating-container');
    rating.innerHTML = `You Select ${buttonValue} out of 5`;
    container.appendChild(rating);

    const thankYou = document.createElement('thankyou-div');
    thankYou.classList.add('thank-you');
    thankYou.innerHTML = 'Thank You';
    container.appendChild(thankYou);

    const description = document.createElement('div');
    description.classList.add('desc');
    description.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    container.appendChild(description);
})

function removeChildFunction()
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}