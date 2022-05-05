const animationComponent = function countingUp() {
    document.getElementById("to100-counter").innerHTML = window.cntr;
    if (window.cntr < 100) {
        window.cntr++;
        setTimeout(function () { countingUp(); }, 45);
    } else {
    }
}
window.cntr = 0;

window.setTimeout("closeto100();", 6000);

function closeto100() {
    document.getElementById("to100").style.display = " none";
}

// Mouse pointer setup:

function cursorHandler() {

    let mouseCursor = document.querySelector(".cursor");
    let mouseTarget = document.querySelectorAll(".menu");
    function cursor(e) {
        //console.log(e.target);//
        mouseCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
    window.addEventListener("mousemove", cursor);
}


//akkor induljon az animáció, ha odascrolloztunk:

function scrollmanagingthree() {
    let three = document.getElementById("three")

    let onscroll3 = function () {
        let viewportBottom = window.scrollY + window.innerHeight

        if (three.offsetTop + 400 < viewportBottom) {
            three.classList.add("running")
        }
    }
    document.addEventListener('scroll', onscroll3);
}

function scrollmanagingtwo() {
    let two = document.getElementById("two")

    let onscroll3 = function () {
        let viewportBottom = window.scrollY + window.innerHeight

        if (two.offsetTop + 500 < viewportBottom) {
            two.classList.add("running")
        }
    }
    document.addEventListener('scroll', onscroll3);
}



/* let mouseCursor = document.querySelector('.cursor');

 window.addEventListener('mousemove',cursor)

 function cursor(e){
     console.log(e);
 } */

/* // insert the loading animation of the HTML
const animationComponent = function () {
return`
 
`
} */

// insert the header of the HTML
const headerComponent = function () {
    return `
     
     `
}

// insert the main section of the HTML
const sectionComponent = function () {
    return `
     
     `
}

// if we have time :) insert the footer section of the HTML
const footerComponent = function () {
    return `
     
     `
}

const loadEvent = function () {
    /*const to100Element = document.getElementById("to100"); ez nem kell*/
    const rootElement = document.getElementById("root");

    /*to100Element.insertAdjacentHTML( "beforebegin", animationComponent() ); ez sem kell*/
    animationComponent();

    rootElement.insertAdjacentHTML("afterbegin", headerComponent());
    rootElement.insertAdjacentHTML("afterbegin", sectionComponent());
    rootElement.insertAdjacentHTML("afterbegin", footerComponent());

    cursorHandler();

    scrollmanagingtwo()
    scrollmanagingthree();
}

window.addEventListener("load", loadEvent)