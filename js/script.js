//code of the nav
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');

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


// click plus to see the answer
const plus = document.querySelectorAll('.question span');
const qAnswer = document.querySelectorAll('#para');

plus.forEach((element) => {
  // add class to check about it later
  element.classList.add('hidden');

  element.addEventListener('click', (e) => {
    //Plus.length works but.. qAnswer doesn't work
    //loop to hide all the answer
    for(let i=0; i<plus.length; i++) {
      qAnswer[i].style.display = 'none';
      plus[i].innerHTML = '&plus;';
    }

    const p = e.currentTarget.nextElementSibling;

    //check about hidden class
    if(element.classList.contains('hidden')) {
      p.style.display = 'block';
      element.innerHTML = '&minus;';
      element.classList.toggle('hidden');

    } else {
      p.style.display = 'none';
      element.innerHTML = '&plus;';
      element.classList.toggle('hidden');
    }

  });
});


// Read this article code
const readArticle = document.querySelectorAll('.box_info_div h4');

readArticle.forEach(element => {
  element.addEventListener('click', (e) => {
    //the image parent and image src
    const imageParent = e.currentTarget.parentElement.parentElement.firstElementChild;
    let imageSrc = imageParent.firstElementChild.getAttribute('src');
    //check if you at index or blog page
    //result if false returns -1 / if true returns 68_the index
    if(location.pathname.search('pages/blog.html') > 1){ 
      //delete the first index (.) so that the img src is correct
      const theImageSrc = imageSrc.substring(1);
      //put image src at the localStorage
      localStorage.setItem('box_image', theImageSrc);
      const pathname = location.pathname;
      const newPathname = pathname.replace('pages/blog.html', '') ;
      const goPathname = newPathname + 'pages/article.html';
      window.open(goPathname);

    } else {
      localStorage.setItem('box_image', imageSrc);
      const pathname = location.pathname;
      const newPathname = pathname.replace('index.html', '');
      const goPathname = newPathname + 'pages/article.html';
      window.open(goPathname);
    }
  
  });
});



// blog headlines code
const headline = document.querySelectorAll('#headlines_ul li');
const box_blue_btn = document.querySelectorAll('.box_blue_btn');
const box_red_btn = document.querySelectorAll('.box_red_btn');
const headline_h1 = document.querySelectorAll('#headline_h1');

headline.forEach(element => {
  element.addEventListener('click', () => {
    // loop to add | delete active class
    for(let i=0; i< headline.length; i++) {
      headline[i].classList.remove('active');
    }
    element.classList.add('active');
    // loop to display all box that matches with the headline
    for(let i=0; i<box_blue_btn.length; i++) {
      if(element.textContent === 'All'){
        box_blue_btn[i].parentElement.parentElement.style.display = 'block';

      } else {

        if(box_blue_btn[i].textContent === element.textContent) {
          box_blue_btn[i].parentElement.parentElement.style.display = 'block';
          // loop to delete all h1 that doesn't match
          for(let i=0; i<headline_h1.length; i++) {
            if(headline_h1[i].textContent === element.textContent){
              headline_h1[i].style.display = 'block';
            } else {
              headline_h1[i].style.display = 'none';
            }
          }

        } else {
          //hide boxes that is not included
          box_blue_btn[i].parentElement.parentElement.style.display = 'none';
        }
      }
    }

  });
});

// Featured and Popular headline btns
const unique = document.querySelectorAll('#unique');
unique.forEach(env => {
  env.addEventListener('click', () => {
    //show featured or popular boxes
    for(let i=0; i<box_red_btn.length; i++){
      if(box_red_btn[i].textContent === env.textContent){
        box_red_btn[i].parentElement.parentElement.style.display = 'block';
        // loop to delete all h1
        for(let i=0; i<headline_h1.length; i++) {
          headline_h1[i].style.display = 'none';
        }
      } else {
        //hide featured or popular boxes
        box_red_btn[i].parentElement.parentElement.style.display = 'none';
      }
    }
  })
})