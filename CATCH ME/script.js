var box = document.getElementById('box');

var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

window.addEventListener('resize',function(){
  viewHeight = window.innerHeight;
  viewWidth = window.innerWidth;
})


box.addEventListener('mouseover',function(){
  var coordinates = box.getBoundingClientRect();
  var pos = getnewCoordinates(coordinates.width,coordinates.height);
  box.style.top = pos.y + "px";
  box.style.left = pos.x + "px";
});

function getnewCoordinates(width,height)
{
  var newX = Math.floor((Math.random()*viewWidth) +1 - width);
  var newY = Math.floor((Math.random()*viewHeight) +1 - height);

  if(newX <0)
  {
    newX = 0;
  }
  if(newY < 0)
  {
    newY = 0
  }

  return {x : newX, y: newY};
}
