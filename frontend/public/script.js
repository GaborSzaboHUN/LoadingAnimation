function countingUp() {
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

function scrollManagingTwo() {
    let two = document.getElementById("two")

    let onscroll3 = function () {
        let viewportBottom = window.scrollY + window.innerHeight

        if (two.offsetTop + 500 < viewportBottom) {
            two.classList.add("running")
        }
    }
    document.addEventListener('scroll', onscroll3);
}

function scrollManagingThree() {
    let three = document.getElementById("three")

    let onscroll3 = function () {
        let viewportBottom = window.scrollY + window.innerHeight

        if (three.offsetTop + 400 < viewportBottom) {
            three.classList.add("running")
        }
    }
    document.addEventListener('scroll', onscroll3);
}

/* 
// insert the loading animation of the HTML
const animationComponent = function () {
return`
 
`
} */

// insert the header of the HTML
const animationSectionComponent = function () {
    return `
    <div class="cursor"></div>
	<!--Loading(Niki)-->
	<div class="animation-container">
		<div id="to100">
			<img src="img/apostrophe.png">
			<h1><span id="to100-counter">00</span></h1>
		</div>
		<div class="image-container">
	
			<img class="opening-image1" src="img/blackpattern.jpeg" alt="">
			<img class="opening-image2" src="img/whitepattern.jpeg" alt="">

		</div>
		<div>
			<span>Art objects</span>
			<span>New York, NY</span>
		</div>
	</div>
     `
}

// insert the main section of the HTML
const firstSectionComponent = function () {
    return `
    <!-- 1st viewport - the menu (Gabor)-->

	<nav class="menu-row-container">
		<button class="section-name menu underline">MENU</button>
		<p class="section-name menu-owner">MATTHEW FISHER</p>
		<a href="#" class="section-name menu underline">CART</a>
	</nav>

	<div class="menu-screen">

		<div class="art-objects">
			<h1>ART</h1>
			<h1>OBJECTS</h1>
		</div>

		<div class="left-column-container">
			<a href="#" class="section-name side-list underline">INTRO</a>
			<a href="#" class="section-name side-list underline">ABOUT</a>
			<a href="#" class="section-name side-list underline">FEATURED</a>
		</div>

		<div class="menu-bottom">
			<a href="#"><img src="img/dots.svg" alt="dotted menu"></a>
			<a href="#" class="section-name side-list underline">INDEX</a>
		</div>

	</div>
     `
}

const secondSectionComponent = function () {
    return `
    <section id="two">
        <div class="left">
            <h2 class="section-name">apol</h2>
            <img src="img/leftplant.jpg">
        </div>
        <div class="right">
            <h2 class="section-name">hadr</h2>
            <img src="img/rightplant.jpg">
        </div>
    </section>
     `
}

const thirdSectionComponent = function () {
    return `
    <section id="three">
        <div>
            <h2 class="section-name about-title">About</h2>
            <p class="about-text">
                <span class="first-line">Existing between the</span>
                <span>boundaries of nature and culture,</span>
                <span>Matthew’s work conveys an evocative</span>
                <span>nostalgia through the use of historically</span>
                <span>revered natural materials. His work</span>
                <span>ranges from unique art objects to</span>
                <span>editioned productions and celebrates</span>
                <span>the union between heritage, natural</span>
                <span>materials, and refined craftsmanship.</span>
            </p>
        </div>
    </section>
     `
}

const loadEvent = function () {
    /*const to100Element = document.getElementById("to100"); ez nem kell*/
    const rootElement = document.getElementById("root");

    /*to100Element.insertAdjacentHTML( "beforebegin", animationComponent() ); ez sem kell*/
    
    rootElement.insertAdjacentHTML("beforeend", animationSectionComponent());
    rootElement.insertAdjacentHTML("beforeend", firstSectionComponent());
    rootElement.insertAdjacentHTML("beforeend", secondSectionComponent());
    rootElement.insertAdjacentHTML("beforeend", thirdSectionComponent());
    
    countingUp();
    cursorHandler();

    scrollManagingTwo();
    scrollManagingThree();
}

window.addEventListener("load", loadEvent)