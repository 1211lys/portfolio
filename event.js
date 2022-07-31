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