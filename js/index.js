// start toggle mobile menu
let mobileMenuIcon = document.querySelector(".header .container .navigation .mobile-menu .menu-icon") ,
    mobileMenu = document.querySelector(".header .container .navigation .mobile-menu .mobile-links") ;
mobileMenuIcon.addEventListener("click" , ()=>{
    mobileMenu.classList.toggle("open")
})
// end toggle mobile menu