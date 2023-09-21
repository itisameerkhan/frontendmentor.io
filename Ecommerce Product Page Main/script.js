const cartContainerLogo = document.querySelector('.profile-container .cart-container-main span');
const cartContainer = document.querySelector('.profile-container .cart-container')

let flag = 0;
cartContainerLogo.addEventListener('click', ()=> {
    if(flag === 0)
    {
        cartContainer.style.visibility = 'visible';
        cartContainer.style.opacity = '1';
        cartContainer.style.height = '250px';
        flag = 1;
    }
    else 
    {
        cartContainer.style.visibility = 'hidden';
        cartContainer.style.opacity = '0';
        cartContainer.style.height = '100px';
        flag = 0;
    }
})

//image 

const cartContainerImage = document.getElementById('cart-container-image');
const cartContainerShowCase = document.querySelectorAll('.product-image');

cartContainerShowCase.forEach(image => {
    image.addEventListener('click', ()=> {
        removeSelectedImage();
        image.classList.add('selected-image');
        cartContainerImage.classList.remove('animation-image');
        void cartContainerImage.offsetWidth; 
        cartContainerImage.classList.add('animation-image');
        cartContainerImage.setAttribute('src',image.getAttribute('src'));
    })
});

function removeSelectedImage()
{
    cartContainerShowCase.forEach(image => {
        image.classList.remove('selected-image');
    })
}

// range value

const add = document.getElementById('add-button');
const remove = document.getElementById('remove-button');
const rangeValue = document.getElementById('range-number');
let rangeNumber = 0;

add.addEventListener('click', ()=> {
    rangeNumber++;
    rangeValue.textContent = rangeNumber;
    console.log('function called')
})
remove.addEventListener('click', ()=> {
    rangeNumber--;
    if(rangeNumber <= 0) rangeNumber=0;
    rangeValue.textContent = rangeNumber;
    console.log('function called')
})

//cart details 

const emptyMessage = document.getElementById('empty-message');
const cartDetails = document.getElementById('cart-details-container');
const totalDetails = document.getElementById('total-details');
const deleteButton = document.getElementById('delete-button');
const AddtoCart = document.getElementById('add-to-cart');

AddtoCart.addEventListener('click', ()=> {
    if(rangeNumber === 0) return;
    emptyMessage.style.display = "none";
    cartDetails.style.visibility = "visible";
    totalDetails.innerHTML = `<p>$120 X ${rangeNumber} <strong>$${rangeNumber * 120}</strong></p>`
})

deleteButton.addEventListener('click', ()=> {
    emptyMessage.style.display = "block";
    cartDetails.style.visibility = 'hidden';
})