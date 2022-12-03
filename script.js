
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let section = document.getElementById("section");
    section.style.backgroundImage = "rotate(" + window.pageYOffset/2 + "deg)";
    
}
/*
function open(){
    let servicess = getElementByClass("servicess");
    servicess.style.visibility= "visible";
};*/