var stage = document.getElementsByClassName('stage');
var stageContentBlock = document.getElementsByClassName('stageContentBlock');


function clearStageBlock() {
  for (var i = 0; i < stageContentBlock.length; i++) {
    stageContentBlock[i].style.display = 'none';
  }
}

function clearStageColors(e) {
  for (var i = 0; i < stage.length; i++) {
    stage[i].style.background = '#f1edea';
  }
}

for (var i = 0; i < stage.length; i++) {
  stage[i].addEventListener('click', (e)=>{
    clearStageBlock();
    clearStageColors(e);
    procesBarUpdate(e);
    e.target.style.background = '#e2d6cd';
    stageContentBlock[e.target.dataset.stageselected].style.display = 'block';
    // stage[Number(e.target.dataset.stageselected)+1].style.height = '11.494505vw';
    // console.log(Number(e.target.dataset.stageselected) + 1);
    console.log(Number(e.target.dataset.stageselected)+1);
  });
}

stage[0].addEventListener('click', e=>{
  // console.log(e.target.dataset.stageselected);
})

// continue button
var continueButton = document.getElementsByClassName('continueButton');
continueButton[0].addEventListener('click',()=>{
  clearStageBlock();
  clearStageColors();
  stage[1].style.background = '#e2d6cd';
  stageContentBlock[1].style.display = 'block';
  stage[1].style.height = '11.494505vw';
  procesUpdateContinue(1)
});
continueButton[1].addEventListener('click',()=>{
  clearStageBlock();
  clearStageColors();
  stage[2].style.background = '#e2d6cd';
  stageContentBlock[2].style.display = 'block';
  stage[2].style.height = '11.494505vw';
  procesUpdateContinue(2)
});
continueButton[2].addEventListener('click',()=>{
  clearStageBlock();
  clearStageColors();
  stage[3].style.background = '#e2d6cd';
  stageContentBlock[3].style.display = 'block';
  stage[3].style.height = '11.494505vw';
  procesUpdateContinue(3)
});
continueButton[3].addEventListener('click',()=>{
  clearStageBlock();
  clearStageColors();
  stage[4].style.background = '#e2d6cd';
  stageContentBlock[4].style.display = 'block';
  stage[4].style.height = '11.494505vw';
  procesUpdateContinue(4)
});
continueButton[4].addEventListener('click',()=>{
  clearStageBlock();
  clearStageColors();
  stage[5].style.background = '#e2d6cd';
  stageContentBlock[5].style.display = 'block';
  stage[5].style.height = '11.494505vw';
  procesUpdateContinue(5)
});


// progres bars
var processBar = document.getElementsByClassName('processBar');
var processBarFill = document.getElementsByClassName('processBarFill');

function procesBarUpdate(e) {
  processBarFill[0].style.width = 16.666+16.666 * e.target.dataset.stageselected + '%';
  // processBar[0].style.top = 5 + 5.95 * e.target.dataset.stageselected + 'vw';
}
function procesUpdateContinue(e) {
  processBarFill[0].style.width = 16.666+16.666 * e + '%';
}
