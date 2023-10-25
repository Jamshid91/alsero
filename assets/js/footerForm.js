
const formFooter = document.querySelector('.footer .form'),
       userNameFooter = document.querySelector('.footer #name1'),
       userPhoneFooter = document.querySelector('.footer #phone1'),
       submitBtnFooter = document.querySelector('.footer .form__btn'),
       popUpThanks = document.querySelector('.popUp-thanks');
   
   submitBtnFooter.addEventListener('click', (e) => {
     checkInputsFooter()
   
   let successName = userNameFooter.parentElement.children[2].classList;
   let successPhone = userPhoneFooter.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnFooter.type = 'submit'   
   popUpThanks.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameFooter.value,
       phone: userPhoneFooter.value,
     }
   }
   });
   
   
   
   function checkInputsFooter() {
     const userNameFooterValue = userNameFooter.value.trim();
    const userPhoneFooterValue = userPhoneFooter.value.trim();
   
     if(userNameFooterValue === '') {
       setErrorFor(userNameFooter, 'red', '')
     } else {
       setSuccesFor(userNameFooter);
       userNameFooter.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneFooterValue === '') {
       setErrorFor(userPhoneFooter, 'red', '')
     } else {
       setSuccesFor(userPhoneFooter)
       userPhoneFooter.parentElement.children[2].classList.add('success');
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


