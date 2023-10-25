
const left = document.querySelector(".slide-next"),
       slideBtn = document.querySelector(".slide-btn"),
       slides = document.querySelectorAll(".slides .slide"),
       slideNum = document.querySelector(".slide-page .active"),
       popUpCalculate = document.querySelector(".popUp-calculate"),
       calculate = document.querySelector(".popUp .calculate"),
       calculateBtn = document.querySelectorAll('.calculate__btn'),
       nextFormBtn = document.querySelector(".calculate .slide-btn"),
       form = document.querySelector('.popUp-calculate .form'),
       userName = document.querySelector('.popUp-calculate #userName'),
       userPhone = document.querySelector('.popUp-calculate #userPhone'),
       submitBtn = document.querySelector('.popUp-calculate #submitForm');
   
   
   submitBtn.addEventListener('click', (e) => {
     checkInputsCalculate()
   
   let successName = userName.parentElement.children[2].classList;
   let successPhone = userPhone.parentElement.children[2].classList;
   
   if(successName == 'success' && successPhone == 'success') {
   //   submitBtn.type = 'submit'   
   form.parentElement.parentElement.classList.add('d-none')
   form.parentElement.parentElement.nextElementSibling.classList.remove('d-none')
   setTimeout(() => {
       location.reload()
     }, 5000);
     
     const values = {
       name: userName.value,
       phone: userPhone.value,
     }
   }
   });
   
   
   
   function checkInputsCalculate() {
     const userNameValue = userName.value.trim();
    const userPhoneValue = userPhone.value.trim();
   
     if(userNameValue === '') {
       setErrorFor(userName, 'red', '')
     } else {
       setSuccesFor(userName);
       userName.parentElement.children[2].classList.add('success');
     }
   
     if(userPhoneValue === '') {
       setErrorFor(userPhone, 'red', '')
     } else {
       setSuccesFor(userPhone)
       userPhone.parentElement.children[2].classList.add('success');
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


let i = 0;

left.addEventListener("click", moveLeft);



function moveLeft() {
    if (i == slides.length - 1) {
       
    } else {
        slides[i].classList.add('d-none');
        slides[i + 1].classList.remove('d-none');
        i++
    }
    if(i == 1) {
        slideNum.innerHTML = 2
    } else if (i == 2) {
        slideNum.innerHTML = 3
    } else if (i == 3) {
        slideNum.innerHTML = 4
    }else if (i == 4) {
        slideNum.innerHTML = 5;
        left.classList.add('d-none');
        slideBtn.classList.remove('d-none');
    }

}


let rangeInp = document.querySelector('.calculate-item .range__inp');

function init() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        slider.oninput = onSliderInput;

        updateValue(slider);
        updateValuePosition(slider);
        updateLabels(slider);

        setTicks(slider);
    }
}

function onSliderInput(event) {
    updateValue(event.target);
    updateValuePosition(event.target);
    updateLabels(event.target);
}

function updateValue(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    value.innerHTML = "<div>" + slider.value + ' m' + '<sup>2</sup>' + "</div>";
}

function updateValuePosition(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    const percent = getSliderPercent(slider);

    const sliderWidth = slider.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const handleSize = slider.dataset.handleSize;

    let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

    left = Math.min(left, sliderWidth - valueWidth);
    left = slider.value === slider.min ? 0 : left;

    value.style.left = left + "px";
}

function updateLabels(slider) {
    const value = document.getElementById(slider.dataset.valueId);
    const minLabel = document.getElementById(slider.dataset.minLabelId);
    const maxLabel = document.getElementById(slider.dataset.maxLabelId);

    const valueRect = value.getBoundingClientRect();
    const minLabelRect = minLabel.getBoundingClientRect();
    const maxLabelRect = maxLabel.getBoundingClientRect();

    const minLabelDelta = valueRect.left - (minLabelRect.left);
    const maxLabelDelta = maxLabelRect.left - valueRect.left;

    const deltaThreshold = 32;

    if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
    else minLabel.classList.remove("hidden");

    if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
    else maxLabel.classList.remove("hidden");
}

function getSliderPercent(slider) {
    const range = slider.max - slider.min;
    const absValue = slider.value - slider.min;

    return absValue / range;
}

function setTicks(slider) {
    let container = document.getElementById(slider.dataset.tickId);
    const spacing = parseFloat(slider.dataset.tickStep);
    const sliderRange = slider.max - slider.min;
    const tickCount = sliderRange / spacing + 1; // +1 to account for 0

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");

        tick.className = "tick-slider-tick";

        container.appendChild(tick);
    }
}

function onResize() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        updateValuePosition(slider);
    }
}

window.onload = init;

// popUp

calculateBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      popUpCalculate.classList.remove('d-none')
   }
)});

nextFormBtn.addEventListener('click', () => {
    calculate.classList.add('d-none');
    calculate.nextElementSibling.classList.remove('d-none');
})



