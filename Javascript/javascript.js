window.addEventListener('DOMContentLoaded',init,false);

/* cbc 2018-12-10: style and functions of javascript in index page */

function init() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeColor0,false)
buttons[1].addEventListener('click', changeColor1, false)
buttons[2].addEventListener('click', changeColor2, false)
}

function changeColor0() {
var p1 = document.getElementById("colorToggle")
{p1.style.backgroundColor = "skyblue";}
}

function changeColor1() {
var ul = document.getElementById("mybutton")
{ul.style.backgroundColor = "gold";}
}

