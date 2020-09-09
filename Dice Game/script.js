var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
var text = document.getElementsByClassName('text')[0];

function getRandomNum(){

    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    return n;

}





function addFunction()
{
    console.log('hi');
    var num1 = getRandomNum();
    var num2 = getRandomNum();

    img1.setAttribute('src','images/' + num1 + '.png');
    img2.setAttribute('src','images/' + num2 + '.png');

    if(num1 === num2)
    {
        text.innerHTML = "Draw!"
    }
    else if (num1 > num2)
    {
        text.innerHTML = "🚩 Play 1 Wins!";
    }
    else
    {
        text.innerHTML = "Player 2 wins! 🚩";
    }
}


window.addEventListener('load',addFunction);