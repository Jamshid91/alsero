
const formPrice = document.querySelector('.popUp-price .form'),
       userNamePrice = document.querySelector('.popUp-price #userName'),
       userPhonePrice = document.querySelector('.popUp-price #userPhone'),
       submitBtnPrice = document.querySelector('.popUp-price #submitForm'),
       popUpPrice = document.querySelector('.popUp-price'),
       priceBtn = document.querySelectorAll('.price__btn');

priceBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpPrice.classList.remove('d-none')
    })
})
   
   submitBtnPrice.addEventListener('click', (e) => {
     checkInputsPrice()
   
   let successName = userNamePrice.parentElement.children[2].classList;
   let successPhone = userPhonePrice.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnPrice.type = 'submit'   
   formPrice.parentElement.parentElement.classList.add('d-none')
   formPrice.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNamePrice.value,
       phone: userPhonePrice.value,
     }
   }
   });
   
   
   
   function checkInputsPrice() {
     const userNamePriceValue = userNamePrice.value.trim();
    const userPhonePriceValue = userPhonePrice.value.trim();
     if(userNamePriceValue === '') {
       setErrorFor(userNamePrice, 'red', '')
     } else {
       setSuccesFor(userNamePrice);
       userNamePrice.parentElement.children[2].classList.add('success');
     }
   
     if(userPhonePriceValue === '') {
       setErrorFor(userPhonePrice, 'red', '')
     } else {
       setSuccesFor(userPhonePrice)
       userPhonePrice.parentElement.children[2].classList.add('success');
     }
   }
   
   function setErrorFor(input, border, message) {
       let small = input.parentElement.children[2]
       small.innerText = message
       input.classList.add('inputError');
       input.style.borderBottom = `1px solid ${border}`;
   }
   
   function setSuccesFor(input) {
       input.style.borderBottom = `1px solid #2ecc71`;
       input.classList.remove('inputError');
       input.classList.add('inputSucces');
       let small = input.parentElement.children[2]
       small.innerText = ''
   } 
   
   // mask phohne
   // input mask
   $(":input").inputmask();
   $(".phone").inputmask({"mask": "+7(999) 999-99-99"});


