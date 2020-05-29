// eye shwo pass
var eyePasToggle = document.getElementsByClassName('eyePasToggle');

for (var i = 0; i < eyePasToggle.length; i++) {
  eyePasToggle[i].addEventListener('click',(e)=>{
    if(e.target.parentNode.children[1].type == 'password'){
      e.target.parentNode.children[1].type = 'text';
    }else{
      e.target.parentNode.children[1].type = 'password';
    }
  })
}
