
const formRepeair = document.querySelector('.repeair-form .form'),
userNameRepeair = document.querySelector('.repeair-form #name2'),
userPhoneRepeair = document.querySelector('.repeair-form #phone2'),
submitBtnRepeair = document.querySelector('.repeair-form .form__btn');

submitBtnRepeair.addEventListener('click', (e) => {
checkInputsRepeair()

let successName = userNameRepeair.parentElement.children[2].classList;
let successPhone = userPhoneRepeair.parentElement.children[2].classList;

if(successName == 'success' && successPhone == 'success') {
//   submitBtnRepeair.type = 'submit'   
popUpThanks.classList.remove('d-none')
setTimeout(() => {
location.reload()
}, 5000);

const values = {
name: userNameRepeair.value,
phone: userPhoneRepeair.value,
}
}
});



function checkInputsRepeair() {
const userNameRepeairValue = userNameRepeair.value.trim();
const userPhoneRepeairValue = userPhoneRepeair.value.trim();
if(userNameRepeairValue === '') {
setErrorFor(userNameRepeair, 'red', '')
} else {
setSuccesFor(userNameRepeair);
userNameRepeair.parentElement.children[2].classList.add('success');
}

if(userPhoneRepeairValue === '') {
setErrorFor(userPhoneRepeair, 'red', '')
} else {
setSuccesFor(userPhoneRepeair)
userPhoneRepeair.parentElement.children[2].classList.add('success');
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


// У вас уже есть дизайн-проект?
const userNameDesign = document.querySelector('.design-form #name'),
       userPhoneDesign = document.querySelector('.design-form #phone'),
       uploadFile = document.querySelector('.design-form #upload'),
       submitBtnDesign = document.querySelector('.design-form .form__btn');


       uploadFile.addEventListener('change', (e) => {
         if(e.target.files.length > 0) {
         let src = URL.createObjectURL(e.target.files[0]);
         uploadFile.parentElement.children[2].textContent = e.target.files[0].name
         }
         });
   
   submitBtnDesign.addEventListener('click', (e) => {
     checkInputs()
   
   let successName = userNameDesign.parentElement.children[2].classList;
   let successPhone = userPhoneDesign.parentElement.children[2].classList;
   let successFile = uploadFile.parentElement.children[3].classList;
   
   if(successName == 'success' && successPhone == 'success' && successFile == 'success') {
   //   submitBtnDesign.type = 'submit'   
   popUpThanks.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userNameDesign.value,
       phone: userPhoneDesign.value,
     }
   }
   });
   
   
   
   function checkInputs() {
     const userNameDesignValue = userNameDesign.value.trim();
    const userPhoneDesignValue = userPhoneDesign.value.trim();
   
    if(uploadFile.files.length == 0) {
      uploadFile.parentElement.children[2].style.color = 'tomato'
    } else {
      uploadFile.parentElement.children[2].style.color = '#2ecc71'
      uploadFile.parentElement.children[3].classList.add('success');
    }

     if(userNameDesignValue === '') {
       setErrorFor(userNameDesign, 'tomato', '')
     } else {
       setSuccesFor(userNameDesign);
       userNameDesign.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneDesignValue === '') {
       setErrorFor(userPhoneDesign, 'tomato', '')
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


