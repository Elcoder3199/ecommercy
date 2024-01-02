let header = document.querySelector(".header"),
menuIcon = document.querySelector("#menu-icon"),
navmenu = document.querySelector(".navmenu"),
down_arrow = document.getElementById("down-arrow");

// Add Active Class To Header

window.onscroll = () => {
    if (window.scrollY > 200) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

// Open Menu

menuIcon.addEventListener("click", () => navmenu.classList.toggle("open"));

// Down Arrow On Click Scroll = document.documentElement.clientHeight

down_arrow.addEventListener("click", () => {
    window.scroll({
        top: document.documentElement.clientHeight,
        left: 0,
        behavior: 'smooth',
    })
})