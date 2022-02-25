// navigation element
let homeLink = document.querySelector(".navigation__link-home");
let aboutLink = document.querySelector(".navigation_link-about");
let resumeLink = document.querySelector(".navigation_link-resume");

// block of menu
let currentBlock;
let homeMenuBlock = document.getElementById("homeBlock");
let aboutMenuBlock = document.getElementById("aboutBlock");
let educationMenuBlock = document.getElementById("educationBlock");
let portfolioMenuBlock = document.getElementById("portfolioBlock");
let contactsMenuBlock = document.getElementById("contactsBlock");

// unvisible blocks
let blocks = document.querySelector(".right-aside").children;
Array.from(blocks).forEach((element, index) => {
    // first element visible
    if (index < 1) {
        currentBlock = homeMenuBlock;
        return;
    }
    // another unvisible
    element.classList.add("unvisible");
});

// eventListener to navigation links
let navigationLinks = document.querySelector(".navigation__list").children;
Array.from(navigationLinks).forEach((link) => {
    link.addEventListener("click", toggle);
});

function toggle(e) {
    // console.log(currentBlock);
    // console.log("target = ", e.currentTarget.id);
    switch (e.currentTarget.id) {
        case "homeToggler":
            currentBlock.classList.add("unvisible")
            currentBlock = homeMenuBlock
            homeMenuBlock.classList.remove('unvisible')
            break;
        case "aboutToggler":
            currentBlock.classList.add("unvisible")
            currentBlock = aboutMenuBlock
            aboutMenuBlock.classList.remove('unvisible')
            break;
        case "educationToggle":
            currentBlock.classList.add("unvisible")
            currentBlock = educationBlock
            educationBlock.classList.remove('unvisible')
            break;
        case "porfolioToggler":
            currentBlock.classList.add("unvisible")
            currentBlock = portfolioMenuBlock
            portfolioMenuBlock.classList.remove('unvisible')
            break;
        case "contactsToggler":
            currentBlock.classList.add("unvisible")
            currentBlock = contactsMenuBlock
            contactsMenuBlock.classList.remove('unvisible')
            break;
    }
}