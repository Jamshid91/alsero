
const formExcursion = document.querySelector('.popUp-excursion .form'),
       userNameExcursion = document.querySelector('.popUp-excursion #userName'),
       userPhoneExcursion = document.querySelector('.popUp-excursion #userPhone'),
       submitBtnExcursion = document.querySelector('.popUp-excursion #submitForm'),
       popUpExcursion = document.querySelector('.popUp-excursion'),
       excursion__btnBtn = document.querySelectorAll('.objects__btn');

excursion__btnBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpExcursion.classList.remove('d-none')
    })
})
   
   submitBtnExcursion.addEventListener('click', (e) => {
     checkInputsExcursion()
   
   let successName = userNameExcursion.parentElement.children[2].classList;
   let successPhone = userPhoneExcursion.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnExcursion.type = 'submit'   
   formExcursion.parentElement.parentElement.classList.add('d-none')
   formExcursion.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameExcursion.value,
       phone: userPhoneExcursion.value,
     }
   }
   });
   
   
   
   function checkInputsExcursion() {
     const userNameExcursionValue = userNameExcursion.value.trim();
    const userPhoneExcursionValue = userPhoneExcursion.value.trim();
   
     if(userNameExcursionValue === '') {
       setErrorFor(userNameExcursion, 'red', '')
     } else {
       setSuccesFor(userNameExcursion);
       userNameExcursion.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneExcursionValue === '') {
       setErrorFor(userPhoneExcursion, 'red', '')
     } else {
       setSuccesFor(userPhoneExcursion)
       userPhoneExcursion.parentElement.children[2].classList.add('success');
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


