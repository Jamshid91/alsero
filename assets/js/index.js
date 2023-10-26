
   const  odometer1 = document.querySelector('.odometer1'),
         odometer2 = document.querySelector('.odometer2'),
         odometer3 = document.querySelector('.odometer3')

function addAdometer() {
setTimeout(() => {
odometer1.innerHTML = 20
}, 500);
}
function addAdometerTwo() {
   setTimeout(() => {
   odometer2.innerHTML = 769
   }, 500);
}
   function addAdometerThree() {
      setTimeout(() => {
      odometer3.innerHTML = 47
      }, 500);
      }

// addAdometer()
window.addEventListener('scroll', () => {
const positionOdometer = odometer1.getBoundingClientRect().top;
const positionOdometer2 = odometer2.getBoundingClientRect().top;
const positionOdometer3 = odometer3.getBoundingClientRect().top;

const screenPosition = window.innerHeight;

if(screenPosition > positionOdometer) {
   addAdometer()
}
if(screenPosition > positionOdometer2) {
   addAdometerTwo()
   }
if(screenPosition > positionOdometer3) {
   addAdometerThree()
}
});


// scroll Animarion
window.addEventListener('scroll', () => {
   const point0 = document.querySelector('.slide-back0 .point'),
         point1 = document.querySelector('.slide-back1 .point'),
         point2 = document.querySelector('.slide-back2 .point'),
         point3 = document.querySelector('.slide-back3 .point'),
         point4 = document.querySelector('.slide-back4 .point'),
         point5 = document.querySelector('.slide-back5 .point'),
         point6 = document.querySelector('.slide-back6 .point'),
         point7 = document.querySelector('.slide-back7 .point'),
         point8 = document.querySelector('.slide-back8 .point'),
         slide1 = document.querySelector('.slide1'),
         slide2 = document.querySelector('.slide2'),
         slide3 = document.querySelector('.slide3'),
         slide4 = document.querySelector('.slide4'),
         slide5 = document.querySelector('.slide5'),
         slide6 = document.querySelector('.slide6'),
         slide7 = document.querySelector('.slide7'),
         slide8 = document.querySelector('.slide8');

   const positionPoint0 = point0.getBoundingClientRect().top,
         positionPoint1 = point1.getBoundingClientRect().top,
         positionPoint2 = point2.getBoundingClientRect().top,
         positionPoint3 = point3.getBoundingClientRect().top,
         positionPoint4 = point4.getBoundingClientRect().top,
         positionPoint5 = point5.getBoundingClientRect().top,
         positionPoint6 = point6.getBoundingClientRect().top,
         positionPoint7 = point7.getBoundingClientRect().top,
         positionPoint8 = point8.getBoundingClientRect().top;

   const slideActive = document.querySelector('.howWeAreWorking-front')
   
   const screenPosition = window.innerHeight;
   const slides = document.querySelectorAll('.howWeAreWorking .slide');
   slides.forEach(slide => {
      slide.classList.add('d-none');
      slide.firstElementChild.classList.remove('d-none')
   })

   if(screenPosition > positionPoint0) {
      slideActive.classList.add('position-fixed', 'startScroll');
      slide1.classList.remove('d-none');
   } else {
      slideActive.classList.remove('position-fixed')
   }
   if(screenPosition > positionPoint1) {
      slide1.classList.add('d-none');
      slide2.classList.remove('d-none');
   } else {
      slide1.classList.remove('d-none');
      slide2.classList.add('d-none');
   }
   if(screenPosition > positionPoint2) {
      slide2.classList.add('d-none');
      slide3.classList.remove('d-none');
   }
   if(screenPosition > positionPoint3) {
      slide3.classList.add('d-none');
      slide4.classList.remove('d-none');
   }
   if(screenPosition > positionPoint4) {
      slide4.classList.add('d-none');
      slide5.classList.remove('d-none');
   }
   if(screenPosition > positionPoint5) {
      slide5.classList.add('d-none');
      slide6.classList.remove('d-none');
   } 
   if(screenPosition > positionPoint6) {
      slide6.classList.add('d-none');
      slide7.classList.remove('d-none');
   }  
   if(screenPosition > positionPoint7) {
      slide7.classList.add('d-none');
      slide8.classList.remove('d-none');
   }   
   if(screenPosition > positionPoint8) {
      slideActive.classList.remove('position-fixed', 'startScroll')
      slideActive.classList.add('position-absolute', 'stopScroll')
   } else {
      // slideActive.classList.add('position-fixed')
   }

});


// FAQ
const faqs = document.querySelectorAll('.faq-item-head');

faqs.forEach(faq => {
   let count;
   faq.addEventListener('click', () => {
      faqs.forEach(faq => {
         faq.parentElement.classList.remove('showFaq')
      });
      if(count == 0) {
         faq.parentElement.classList.remove('showFaq')
         return count = 1
      } else {
         faq.parentElement.classList.add('showFaq')
         return count = 0
      }
   });
});


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





