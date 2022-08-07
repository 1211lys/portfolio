const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

let booleanClass = false;

document.addEventListener('scroll', () => {
  if (!booleanClass && window.scrollY > navbarHeight) {
    navbar.classList.add('nav_scroll');
    booleanClass = true;
    console.log('true');
  }
  
  if (booleanClass && window.scrollY <= 0) {
    navbar.classList.remove('nav_scroll');
    booleanClass = false;
    console.log('false');
  }
});

const $top = document.querySelector(".moveTop");

$top.onclick = () => {
  window.scrollTo(0, 0);  
}

const $bottom = document.querySelector(".moveBottom");

$bottom.onclick = () => {
  window.scrollTo(0, document.body.scrollHeight);  
}
// const navbar = document.querySelector('#navbar');
// const navbarHeight = navbar.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add('nav_scroll');
//     console.log('if')
//   } else {
//     navbar.classList.remove('nav_scroll');
//     console.log('else')
//   }
// });