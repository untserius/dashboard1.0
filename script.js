const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

// const plusAdd = document.querySelector(".plus")
// const shareButtons = document.querySelector(".share-buttons")


// plusAdd.addEventListener("click", () => {

// })

menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu")
    menuHamburger.classList.toggle("active")

})

