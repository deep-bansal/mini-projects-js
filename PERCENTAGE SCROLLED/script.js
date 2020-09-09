var count = document.getElementById('count');

function getDocHeight()
{
  return Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.body.clientHeight);
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function(){
  docHeight = getDocHeight();
  windowHeight = window.innerHeight;
};


function setScrolled() {

    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);

    count.innerText = scrolled;

}
window.addEventListener("scroll", setScrolled);
