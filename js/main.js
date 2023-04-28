let btnOpenMenu = document.querySelector("#open-menu");
let btnCloseMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");
let links = menu.querySelectorAll("a");

btnOpenMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})

btnCloseMenu.addEventListener("click", () => {
    menu.classList.add("disabled");
})

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let href = link.getAttribute("href");
        let target = document.querySelector(href);
        target.classList.add("scroll");
        target.scrollIntoView();
        menu.classList.add("disabled");
        setTimeout(() => {
            target.classList.remove("scroll");
        }, 300);
    })
})

