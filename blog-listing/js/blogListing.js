var sixImageDiv = document.getElementsByClassName('sixImageDiv');
var sixImageBlackDivInside = document.getElementsByClassName('sixImageBlackDivInside');
var instaBG = document.getElementsByClassName('instaBG');

// six image flexbox
// six image flexbox
// six image flexbox
for (var i = 0; i < sixImageDiv.length; i++) {
  sixImageDiv[i].addEventListener('mouseenter',(e)=>{
    e.target.childNodes[3].style.left = '0vw';
    e.target.childNodes[3].style.bottom = '0vw';
    setTimeout(function () {
      e.target.childNodes[3].style.opacity = '1';
    }, 100);
  });
  sixImageDiv[i].addEventListener('mouseleave',(e)=>{
    e.target.childNodes[3].style.left = '-15.793vw';
    e.target.childNodes[3].style.bottom = '-13.653vw';
    e.target.childNodes[3].style.opacity = '0';
  })
};

// Read more popup
var blogPopUpContainer = document.getElementsByClassName('blogPopUpContainer');
var popUpButton = document.getElementsByClassName('popUpButton');
var popUpCloseButton = document.getElementsByClassName('bigClose');


for (var i = 0; i < popUpButton.length; i++) {
  popUpButton[i].addEventListener('click',()=>{
    blogPopUpContent[0].scrollTop = 0;
    blogPopUpContainer[0].style.top = '0';
    blogPopUpContainer[0].style.opacity = '1';
  });
};


// pop up right side
var mobileArrowOpenPopUp = document.getElementsByClassName('mobileArrowOpenPopUp');
var rightBlogColumn = document.getElementsByClassName('rightBlogColumn');
var orangeArrow = document.getElementsByClassName('orangeArrow');

mobileArrowOpenPopUp[0].addEventListener('click',()=>{
  if(rightBlogColumn[0].style.width !== '70vw'){
    rightBlogColumn[0].style.width = '70vw';
    rightBlogColumn[0].style.paddingTop = '11vw'
    rightBlogColumn[0].style.paddingLeft = '6vw';
    orangeArrow[0].style.right = '6vw';
    rightBlogColumn[0].style.paddingRight = '0vw';
    rightBlogColumn[0].style.boxShadow = '5px 2px 25vw 54vw rgba(0,0,0,0.5)';
  }else{
    rightBlogColumn[0].style.width = '0vw';
    rightBlogColumn[0].style.paddingTop = '0vw'
    rightBlogColumn[0].style.paddingLeft = '0vw';
    rightBlogColumn[0].style.paddingRight = '0vw';
    orangeArrow[0].style.right = '-6vw';
    rightBlogColumn[0].style.boxShadow = '5px 2px 25vw 54vw rgba(0,0,0,0)';
  }
});

function backToDesktop() {
  rightBlogColumn[0].style.width = '36vw';
  rightBlogColumn[0].style.paddingTop = '13vw'
  rightBlogColumn[0].style.paddingLeft = '6vw';
  rightBlogColumn[0].style.paddingRight = '4vw';
  rightBlogColumn[0].style.boxShadow = '5px 2px 25vw 54vw rgba(0,0,0,0)';
}

function backToMobile() {
  rightBlogColumn[0].style.width = '0vw';
  rightBlogColumn[0].style.paddingTop = '11vw'
  rightBlogColumn[0].style.paddingLeft = '0vw';
  rightBlogColumn[0].style.paddingRight = '0vw';
}

window.addEventListener('resize',()=>{
  if(window.innerWidth > window.innerHeight){
    backToDesktop()
  }else{
    backToMobile();
  }
})


// padding-top: 11vw;
// padding-left: 6vw;
