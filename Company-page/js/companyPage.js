var aboutUsImageBox = document.getElementsByClassName('aboutUsImageBox');
var aboutUsRevealColorOne = document.getElementsByClassName('aboutUsRevealColorOne');
var aboutUsRevealColorTwo = document.getElementsByClassName('aboutUsRevealColorTwo');




function aboutUsReveal() {
  if(aboutUsImageBox[0].getClientRects()[0].top < window.innerHeight /3){
    aboutUsRevealColorTwo[0].style.width = '0vw';
    setTimeout(function () {
      aboutUsRevealColorOne[0].style.width = '0vw';
    }, 500);
  }
}

// why chose us reveal
var whyChoseUsRevealColorOne = document.getElementsByClassName('whyChoseUsRevealColorOne');
var whyChoseUsRevealColorTwo = document.getElementsByClassName('whyChoseUsRevealColorTwo');
function whyChoseUsReveal() {
  if(aboutUsImageBox[1].getClientRects()[0].top < window.innerHeight /3){
    whyChoseUsRevealColorTwo[0].style.width = '0vw';
    setTimeout(function () {
      whyChoseUsRevealColorOne[0].style.width = '0vw';
    }, 500);
  }
}

// baner car anim
var banerCar = document.getElementsByClassName('banerCar');
banerCar[0].addEventListener('load',()=>{
  banerCar[0].style.right = '0vw';
})

// baner text anim
var banerHeadingTextOne = document.getElementsByClassName('banerHeadingTextOne');
var banerHeadingTextTwo = document.getElementsByClassName('banerHeadingTextTwo');
setTimeout(function () {
  banerHeadingTextOne[0].style.left = '0vw';
  banerHeadingTextTwo[0].style.bottom = '0vw';  
}, 500);



window.addEventListener('scroll',()=>{
  aboutUsReveal();
  whyChoseUsReveal();
})
