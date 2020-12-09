let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    body.classList.add('dark-theme');
}
toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme','themeActive');
    }else{
        localStorage.removeItem('currentTheme',);
    }
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });