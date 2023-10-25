
const formCall = document.querySelector('.popUp-call .form'),
       userNameCall = document.querySelector('.popUp-call #userName'),
       userPhoneCall = document.querySelector('.popUp-call #userPhone'),
       submitBtnCall = document.querySelector('.popUp-call #submitForm'),
       popUpCall = document.querySelector('.popUp-call'),
       callBtn = document.querySelectorAll('.call__btn');

callBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpCall.classList.remove('d-none')
        popUpCall.classList.remove('d-none')
    })
})
   
   submitBtnCall.addEventListener('click', (e) => {
     checkInputsCall()
   
   let successName = userNameCall.parentElement.children[2].classList;
   let successPhone = userPhoneCall.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnCall.type = 'submit'   
   formCall.parentElement.parentElement.classList.add('d-none')
   formCall.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameCall.value,
       phone: userPhoneCall.value,
     }
   }
   });
   
   
   
   function checkInputsCall() {
     const userNameCallValue = userNameCall.value.trim();
    const userPhoneCallValue = userPhoneCall.value.trim();
   
     if(userNameCallValue === '') {
       setErrorFor(userNameCall, 'red', '')
     } else {
       setSuccesFor(userNameCall);
       userNameCall.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneCallValue === '') {
       setErrorFor(userPhoneCall, 'red', '')
     } else {
       setSuccesFor(userPhoneCall)
       userPhoneCall.parentElement.children[2].classList.add('success');
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


