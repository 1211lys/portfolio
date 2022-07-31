const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

let isAddedClass = false;

document.addEventListener('scroll', () => {
  if (!isAddedClass && window.scrollY > navbarHeight) {
    navbar.classList.add('nav_scroll');
    isAddedClass = true;
  } 
  
  if (isAddedClass && window.scrollY <= 0) {
    navbar.classList.remove('nav_scroll');
    isAddedClass = false;
  }
});

// const navbar = document.querySelector('#navbar');
// const navbarHeight = navbar.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.toggle('nav_scroll')
//     }
// });
