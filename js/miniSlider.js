// the mini slider on the right
const slider_section_div = document.querySelectorAll('.slider_section_div');
const bullets = document.querySelectorAll('.to_slide_bullets span');
const landing_content = document.querySelector('.landing_content');
const bgImages = ['./images/background3.jpg','./images/background.jpg','./images/background2.jpg'];


for(let i=0; i<bullets.length; i++){
  bullets[i].addEventListener('click', () => {
    // loop to add | delete active class
    for(let i=0; i< bullets.length; i++) {
      slider_section_div[i].classList.remove('active');
      bullets[i].classList.remove('active');
    }
    bullets[i].classList.add('active');
    slider_section_div[i].classList.add('active');
    landing_content.style.backgroundImage = `url('${bgImages[i]}')`;
  });
}
let i=2;
function miniSlider () {
    for(let i=0; i< bullets.length; i++) {
      slider_section_div[i].classList.remove('active');
      bullets[i].classList.remove('active');
    }
    bullets[i].classList.add('active');
    slider_section_div[i].classList.add('active');
    landing_content.style.backgroundImage = `url('${bgImages[i]}')`;
  i++
  if(i > 2) {
    i = 0;
  }
}

setInterval(miniSlider, 4000);