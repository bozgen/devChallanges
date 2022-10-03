const handleHam = () => {
    menu.style.right = "0";
}

const handleClose = () => {
    menu.style.right = "-20rem";
}

const hamburger = document.querySelector(".hamburger").addEventListener("click", handleHam)
const closeBtn = document.querySelector(".ham-close").addEventListener("click", handleClose)
const menu = document.querySelector(".ham-menu");

document.addEventListener("scroll", handleClose);

