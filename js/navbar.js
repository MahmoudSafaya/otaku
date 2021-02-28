
const ul = document.querySelector('#navbar_list');
//Hide navbar when not scrolling
const navbar = document.querySelector('#navbar_menu');

//code of the nav
const menu = document.querySelector('.menu');
const menu_i = document.querySelector('.menu i');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  menu.style.display = 'none';
  nav.style.display = 'block';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  menu.style.display = 'block';
  nav.style.display = 'none';
  close.style.display = 'none';
});



//navbar position fixed
window.addEventListener('scroll', () => {
  if(window.scrollY > 50  && window.innerWidth < 600){
      navbar.style.marginTop = '0';
      navbar.style.background = '#222';
      menu_i.style.color = '#fff';
      logo.style.color = '#fff';
  }
});


let scrollTimeout = null;
let scrollendDelay = 2000; // ms

window.addEventListener('scroll', function() {

  if ( scrollTimeout === null ) {
    scrollbeginHandler();

  } else {
    clearTimeout( scrollTimeout );
  }
  scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
  
});

function scrollbeginHandler() {
    // this code executes when scroll begins
    navbar.style.marginTop = '0';
}


let mouse = false;

function scrollendHandler() {
    // this code executes when scroll ends
    if(mouse){
      navbar.style.marginTop = '0';

    } else if(window.scrollY < 40) {
      navbar.style.marginTop = '0';
      navbar.style.background = 'none';
      if(location.pathname.search('index') > 0){
        menu_i.style.color = '#fff';
        logo.style.color = '#fff';
      } else {
        menu_i.style.color = '#010101';
        logo.style.color = '#010101';
      }

    } else {
      navbar.style.marginTop = '-75px';
      scrollTimeout = null;
      
    }
}

//Show navbar when mouse is over it
navbar.addEventListener('mouseover', () => {
  mouse = true;
});

//Hide navbar when mouse leaves
navbar.addEventListener('mouseleave', function() {
  if(window.scrollY > 40) {
    navbar.style.marginTop = '-75px';
  }
  mouse = false;

});