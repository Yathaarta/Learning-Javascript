const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        
        switch(e.target.id) {
            case "blue":
                body.style.backgroundColor = e.target.id;
                body.style.color = 'antiquewhite';
                break;
            case "orange":
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black';
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white';
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                body.style.color= 'darkred';
                break;
        }
    })
});