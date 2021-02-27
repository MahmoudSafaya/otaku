
//get img src from local storage
const articleImg = document.getElementById('the_article_img');
const getImage = localStorage.getItem('box_image');
articleImg.setAttribute('src', `.${getImage}`);


//like or dislike
const like_dislike = document.querySelectorAll('#like');

like_dislike.forEach(element => {
  element.addEventListener('click', () => {
    for(let i=0; i<like_dislike.length; i++) {
      like_dislike[i].style.color = '#000';
    }
    element.style.color = '#3232e5';
  })
})