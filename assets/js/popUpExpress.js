
const formExpress = document.querySelector('.popUp-express .form'),
       userNamExpress = document.querySelector('.popUp-express #userName8'),
       userPhoneExpress = document.querySelector('.popUp-express #userPhone8'),
       submitBtnExpress = document.querySelector('.popUp-express .form__btn'),
       popUpExpress = document.querySelector('.popUp-express'),
       expressOrder = document.querySelectorAll('.express__order');

       expressOrder.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpExpress.classList.remove('d-none')
        popUpExpress.classList.remove('d-none')
    })
})
   
   submitBtnExpress.addEventListener('click', (e) => {
     checkInputsCall()
   
   let successName = userNamExpress.parentElement.children[2].classList;
   let successPhone = userPhoneExpress.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnExpress.type = 'submit'   
   formExpress.parentElement.parentElement.classList.add('d-none')
   formExpress.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNamExpress.value,
       phone: userPhoneExpress.value,
     }
   }
   });
   
   
   
   function checkInputsCall() {
     const userNamExpressValue = userNamExpress.value.trim();
    const userPhoneExpressValue = userPhoneExpress.value.trim();
   
     if(userNamExpressValue === '') {
       setErrorFor(userNamExpress, 'red', '')
     } else {
       setSuccesFor(userNamExpress);
       userNamExpress.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneExpressValue === '') {
       setErrorFor(userPhoneExpress, 'red', '')
     } else {
       setSuccesFor(userPhoneExpress)
       userPhoneExpress.parentElement.children[2].classList.add('success');
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


