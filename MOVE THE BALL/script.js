var ball = document.getElementById('ball');

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function setValue(value)
{
    return value + "px";
}

function keyCode (keypress)
{
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    if(keypress === 119 || keypress === 87)
    {
        if(top > 5)
        {
            ball.style.top = setValue(top -5);
        }
    }

    else if(keypress === 97 || keypress === 65)
    {
        if(left > 5)
        {
            ball.style.left = setValue(left -5);
        }
    }

    else if(keypress === 115 || keypress === 83)
    {
        if(top < (window.innerHeight - ballHeight) - 5)
        {
            ball.style.top = setValue(top + 5);
        }
    }

    else if(keypress === 100 || keypress === 68)
    {
        if(left < (window.innerWidth - ballWidth) - 5 )
        {
            ball.style.left = setValue(left + 5);
        }
    }
};

window.addEventListener('keypress', function(event){

    keyCode(event.keyCode);

});