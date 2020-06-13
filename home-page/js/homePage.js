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
function middlePaperFun() {
  middlePaper[0].style.top = '-9.5vw';
  middlePaper[0].style.boxShadow = '0 0 9vw 1vw rgba(0,0,0,0.2)'

}
// button color handlers
var individCompButton = document.getElementsByClassName('individCompButton');
var selectCategoryButton = document.getElementsByClassName('selectCategoryButton');

individCompButton[0].addEventListener('click',(e)=>{
  indiCompButonColorChange(e,individCompButton)
})
individCompButton[1].addEventListener('click',(e)=>{
  indiCompButonColorChange(e,individCompButton)
})

function indiCompButonColorChange(e,className) {
  for (var i = 0; i < className.length; i++) {
    className[i].style.background = '#e0e0e0';
    // console.log(e);
    // console.log(className);
  }
  e.target.style.background = '#f39a59';
}

var searchByTypeContainer = document.getElementsByClassName('searchByTypeContainer');

for (var i = 0; i < selectCategoryButton.length; i++) {
  selectCategoryButton[i].addEventListener('click',(e)=>{
    indiCompButonColorChange(e,selectCategoryButton);
    if(e.target === selectCategoryButton[0]){
      searchByTypeContainer[0].style.opacity = '0';
      searchByTypeContainer[0].style.pointerEvents = 'none';
      searchByTypeContainer[1].style.opacity = '0';
      searchByTypeContainer[1].style.pointerEvents = 'none';
      console.log(123);
    }else{
      searchByTypeContainer[0].style.opacity = '1';
      searchByTypeContainer[0].style.pointerEvents = 'auto';
      searchByTypeContainer[1].style.opacity = '1';
      searchByTypeContainer[1].style.pointerEvents = 'auto';
    }
  })
}





// windows listeners
window.addEventListener('load',()=>{
  middlePaperFun();
})
