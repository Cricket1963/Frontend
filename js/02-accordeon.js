// const acardeon = document.querySelectorAll("[data-name='accordeon-title']");

// acardeon.forEach( function (item) {
//     item.addEventListener( "click", ShowAcardeon );
// } );

// function ShowAcardeon () {
//     this.nextElementSibling.classList.toggle("hidden");
// }



const headerAcardeon = document.querySelectorAll("[data-name='accordeon-title']");

headerAcardeon.forEach( function (item) {
    item.addEventListener("click", showAcardeon); 
});

function showAcardeon () {
    this.nextElementSibling.classList.toggle("hidden");
}