
const formDesign = document.querySelector('.popUp-design .form'),
       userNameDesign = document.querySelector('.popUp-design #userName3'),
       userPhoneDesign = document.querySelector('.popUp-design #userPhone3'),
       submitBtnDesign = document.querySelector('.popUp-design .form__btn'),
       popUpDesign = document.querySelector('.popUp-design'),
       designBtn = document.querySelectorAll('.design-page__btn');

designBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpDesign.classList.remove('d-none')
        popUpDesign.classList.remove('d-none')
    })
})
   
   submitBtnDesign.addEventListener('click', (e) => {
     checkInputsCall()
   
   let successName = userNameDesign.parentElement.children[2].classList;
   let successPhone = userPhoneDesign.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnDesign.type = 'submit'   
   formDesign.parentElement.parentElement.classList.add('d-none')
   formDesign.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameDesign.value,
       phone: userPhoneDesign.value,
     }
   }
   });
   
   
   
   function checkInputsCall() {
     const userNameDesignValue = userNameDesign.value.trim();
    const userPhoneDesignValue = userPhoneDesign.value.trim();
   
     if(userNameDesignValue === '') {
       setErrorFor(userNameDesign, 'red', '')
     } else {
       setSuccesFor(userNameDesign);
       userNameDesign.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneDesignValue === '') {
       setErrorFor(userPhoneDesign, 'red', '')
     } else {
       setSuccesFor(userPhoneDesign)
       userPhoneDesign.parentElement.children[2].classList.add('success');
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


