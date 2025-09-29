//not good ways to detect events - inject eventhandler in html like onclick="alert('message');" or use onclick eventhandler on element object-js

document.getElementById('pepe_masiha').onclick = function() {
    alert('pepe image clicked');
}

// attachEvent()
// jQuery - on

//better way is to use eventListener which has lot of listeners and methods , some important methods
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode 

document.getElementById('images').addEventListener('click', function(e) {    
    console.log("clicked inside ul");                   //logs message whenever ul of id=images element is clicked
}, false)

// now if chillguy element li span clicked , li is in ul so also ul clicked which eventlistens first is decided by eventpropogation, if set 
// false eventpropogation is bubble-up(inner to outside element) propogation , if set true capturing propogatin (outer to inner element)  
// bydefault false is set

document.getElementById('chill_guy').addEventListener('click', function(e) {
    console.log('chillguy clicked');                   
    e.stopPropagation();            //method used to stop propogation of event happening
}, false)


// preventDefault used to prevent elements default function
// lets say don't wany google.com href link to redirect

document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("google clicked")
})

// what if we want to set similar events on multiple elements , like here we want if any image clicked get log message an image clicked and 
// remove that image(i.e whole li)
// remember to exculed other elements inside ul(id=images) like li , a href, ul, only to select images , so we need to filer images only
// but when removing image we need to remove not just image but whole li 

// we can use parentNode, childNode, etc properties of html elemts collections or nodelist or element objects based on dom structurings

document.querySelector('#images').addEventListener('click' , function(e) {
    if (e.target.tagName === "IMG") {
        console.log(`image clicked, parent element of image is' ${e.target.parentNode}`);
        let removeImg = e.target.parentNode
        removeImg.remove() 
    }
    console.log(e.target.tagName)
    // removeImg.parentNode.removeChild(removeImg)     old way using removeChild method on parent collection
})

