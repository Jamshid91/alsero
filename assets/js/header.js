const headerList = document.querySelector(".header-item.active"),
      header = document.querySelector(".header"),
      menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      menuInfo = document.querySelector('.menu-info'),
      footer = document.querySelector(".footer");


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clicked')
    menu.classList.toggle('showMenu')
});

menuInfo.addEventListener('click', () => {
    menuInfo.classList.toggle('showInfo')
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  positionFooter = footer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 7;
  
  if(scrollTop > lastScrollTop) {
    header.style.top = '-150px'
    menu.classList.remove('showMenu')
    menuBtn.classList.remove('clicked')
  } else {
    setTimeout(() => {
      header.style.top = '0'
      menu.classList.remove('showMenu')
      menuBtn.classList.remove('clicked')
    }, 500);
  }
  if(scrollY > 100) {
    header.classList.add('headerShow')
  } else if(scrollY < 10) {
    header.classList.remove('headerShow')
  }
  lastScrollTop = scrollTop

  if(screenPosition > positionFooter) {
    header.classList.add('d-none')
  } else {
    header.classList.remove('d-none')
  }
})
headerList.addEventListener('click', () => {
    headerList.classList.add('showInfo')
});

document.addEventListener("click",(function(e){
    headerList.contains(e.target)||(headerList.classList.remove("showInfo"))
}));


//       langLists = document.querySelectorAll('.header-lang-list li'),
//       menuBtn = document.querySelector('.menu-btn'),
//       menuCloseBtn = document.querySelector('.menu-close'),
//       menu= document.querySelector('.menu'),
//       body= document.querySelector('body')

// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('ShowClose');
//     menu.classList.toggle('d-none');
//     body.classList.toggle('bodyStopScroll');
// });

// headerLangs.forEach(lang => {
//     lang.addEventListener("click", (()=>{
//         lang.parentElement.classList.toggle("showLang")
//     }));
// });

// langLists.forEach(list => {
//     list.addEventListener('click', () => {
//         list.parentElement.previousElementSibling.children[0].textContent = list.textContent
//     })
// });

// document.addEventListener("click",(function(e){
//     headerLangs.forEach(lang => {
//         lang.contains(e.target)||(lang.parentElement.classList.remove("showLang"))
//     })
// }));