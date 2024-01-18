// const tabsHeader = document.querySelectorAll("[data-tab]");
// const 

// tabsHeader.forEach( function (item) {
//     item.addEventListener( "click", function () {
//         const contentBox = document.querySelector('#' + this.dataset.tab);
//         contentBox.classList.toggle("hidden");
//     } )
// } )


// const tabsButton = document.querySelectorAll("[data-tab]");

// tabsButton.forEach( function (item) {
//     item.addEventListener("click", function () {
//         const tabContent = document.querySelectorAll("[data-tab-content]");
//         tabContent.forEach( function (item) {
//             item.classList.add("hidden");
//         } )

//         const contentTabs = document.querySelector("#" + this.dataset.tab);
//         contentTabs.classList.toggle("hidden");
        
//     } )
// } )

function test ( a,b,c) {
    console.log("first:", a, arguments[0]);
    console.log("second:", b, arguments[1]);
    console.log("third:", c, arguments[2]);
};

test ( "aa", "bb", "cc" );