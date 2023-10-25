
const formFree = document.querySelector('.popUp-free .form'),
       userNameFree = document.querySelector('.popUp-free #userName'),
       userPhoneFree = document.querySelector('.popUp-free #userPhone'),
       submitBtnFree = document.querySelector('.popUp-free #submitForm'),
       popUpFree = document.querySelector('.popUp-free'),
       freeBtn = document.querySelectorAll('.free__btn');

freeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpFree.classList.remove('d-none')
    })
})
   
   submitBtnFree.addEventListener('click', (e) => {
     checkInputsFree()
   
   let successName = userNameFree.parentElement.children[2].classList;
   let successPhone = userPhoneFree.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtnFree.type = 'submit'   
   formFree.parentElement.parentElement.classList.add('d-none')
   formFree.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameFree.value,
       phone: userPhoneFree.value,
     }
   }
   });
   
   
   
   function checkInputsFree() {
     const userNameFreeValue = userNameFree.value.trim();
    const userPhoneFreeValue = userPhoneFree.value.trim();
   
     if(userNameFreeValue === '') {
       setErrorFor(userNameFree, 'red', '')
     } else {
       setSuccesFor(userNameFree);
       userNameFree.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneFreeValue === '') {
       setErrorFor(userPhoneFree, 'red', '')
     } else {
       setSuccesFor(userPhoneFree)
       userPhoneFree.parentElement.children[2].classList.add('success');
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


