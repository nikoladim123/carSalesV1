var searchInput = document.getElementsByClassName('searchInput');
var inputBox = document.getElementsByClassName('inputBox');
var mainHeading = document.getElementsByClassName('mainHeading');


searchInput[0].addEventListener('focus',()=>{
  inputBox[0].style.width = '90%';
  mainHeading[0].style.opacity = '0';
})

searchInput[0].addEventListener('focusout',()=>{
  inputBox[0].style.width = '50%';
  mainHeading[0].style.opacity = '1';
})



// middlePaper anim
var middlePaper = document.getElementsByClassName('middlePaper');

window.addEventListener('load',()=>{
  middlePaper[0].style.top = '-9.5vw';
  middlePaper[0].style.boxShadow = '0 0 9vw 1vw rgba(0,0,0,0.2)'
})
