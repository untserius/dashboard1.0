// Hamburger Menu EventHandler
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu")
    menuHamburger.classList.toggle("active")
})

// Plus Icon EventHandler
const shareBtn = document.querySelector(".fa-plus")
const shareMenu = document.querySelector(".share-buttons")

// Initially hide the share menu on page load
shareMenu.classList.remove("popup");

shareBtn.addEventListener('click', () => {
    shareMenu.classList.toggle("popup")
})