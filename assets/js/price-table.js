
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
   
   // mask phohne
   // input mask
   $(":input").inputmask();
   $(".phone").inputmask({"mask": "+7(999) 999-99-99"});


