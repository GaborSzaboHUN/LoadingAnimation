const animationComponent = function countingUp() {
    document.getElementById("to100").innerHTML=window.cntr;
   if (window.cntr<100) {
       window.cntr++;
       setTimeout(function(){countingUp();},45);
   } else {
   }
 }
 window.cntr=0; 

        
/* // insert the loading animation of the HTML
const animationComponent = function () {
    return`
    
    `
} */

 // insert the header of the HTML
 const headerComponent = function () {
     return`
     
     `
 }

 // insert the main section of the HTML
 const sectionComponent = function () {
     return`
     
     `
    }
    
 // if we have time :) insert the footer section of the HTML
 const footerComponent = function () {
     return `
     
     `
 }

 const loadEvent = function () {
     const to100Element = document.getElementById("to100");
     const rootElement = document.getElementById("root");

     to100Element.insertAdjacentHTML( "beforebegin", animationComponent() );
     rootElement.insertAdjacentHTML( "afterbegin", headerComponent() );
     rootElement.insertAdjacentHTML( "afterbegin", sectionComponent() );
     rootElement.insertAdjacentHTML( "afterbegin", footerComponent() );

 }

 window.addEventListener("load", loadEvent)