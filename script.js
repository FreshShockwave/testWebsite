console.log("Hello World");
const button = document.querySelector(".colourchange");
console.log(button);
button.addEventListener("click", masterHandleClick);
var colours = ["red", "blue", "yellow", "orange", "pink"]
var hasClicked = false
var clickCount = 0 


function masterHandleClick(){
  clickCount += 1
  handleClick()
}
function handleClick(){
  changeColour()
  if (clickCount % 2 == 0){
    return;
  }

  setTimeout(function(){
    handleClick();
  }, 300)
  
}


function changeColour(){
  document.body.style.backgroundColor = randomColour()
}
function randomColour(){
  var rannum = (Math.floor(Math.random() * 5))
  return colours[rannum]
}