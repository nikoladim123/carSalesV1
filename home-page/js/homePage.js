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
