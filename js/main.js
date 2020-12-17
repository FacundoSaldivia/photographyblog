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

const modal1 = document.querySelector('.modal1');
const btn = document.querySelector('.btn1');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach((preview) => {
  preview.addEventListener('click', ()=>{
    if(screen.width > 1000){
      modal1.classList.add('open');
      //Cambio dinamico de imagen y texto
      const originalSrc = preview.getAttribute('src');
      original.src = `${originalSrc}`
    }
  })
})

modal1.addEventListener('click',(e)=>{
  if(e.target.classList.contains('modal1')){
    modal1.classList.remove('open');
  }
})


