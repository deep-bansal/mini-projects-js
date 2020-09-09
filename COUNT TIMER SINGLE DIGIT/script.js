var interval;
var button = document.getElementById('button')

function startCounter()
{

    var input = document.getElementById('myInput').value;
    if(isNaN(input))
    {
        alert('number not defined');
        clearInterval(interval);
        return;
    }

    if(input < 1 || input > 9)
    {
        alert('number not in range');
        clearInterval(interval);
        return;
    }

    var current = document.getElementById('count-1');
    var next = document.getElementsByClassName('count-2')[0];

    resetCounter(current,next);

    clearInterval(interval);

    var count  = 0;
    interval = setInterval(function()
    {
        if(count == input)
        {
            clearInterval(interval);
            alert('count comp');
            return;
        }

        addAnimate(current,next);
        count++;
    },1000);


}

function resetCounter(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function addAnimate(current,next)
{
    next.classList.add('animate');
    setTimeout (function(){
        current.innerText  = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;

    },500);

}

button.addEventListener('click',startCounter);
