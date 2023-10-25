const popUps = document.querySelectorAll('.popUp'),
      popUpClose = document.querySelectorAll('.popUp__close');


popUpClose.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.parentElement.classList.add('d-none')
    })
});

window.addEventListener('click', (e) => {
    popUps.forEach(popUp => {
        if(e.target == popUp) {
            popUp.classList.add('d-none')
        }
    })
})