// generate a random color

const randomColor = function () {
    const hex ='0123456789ABCDEF';
    let color = '#'
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId;
const startChangingColor = function () {
    if(!intervalId) {
        intervalId = setInterval(changingBgColor, 100);
    }

    function changingBgColor() {
        document.body.style.background = randomColor();
        document.body.style.color = randomColor();
        document.querySelector('#start').style.background = randomColor();
        // document.querySelectorAll('button').forEach(function (e) {
        //     e.style.background = randomColor();
        // })
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;  //to save memory 
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);