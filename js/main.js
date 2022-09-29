function toggleMobileNav() {
    let topNav = document.getElementById("topNav")
    let imgReplace = document.getElementById("menuImg");
    if (topNav.classList.contains('nav-closed')) {
        topNav.classList.remove('nav-closed')
        topNav.classList.add('nav-open')
        imgReplace.src = "./img/style/close_black.svg";
    } else if (topNav.classList.contains('nav-open')) {
        topNav.classList.remove('nav-open')
        topNav.classList.add('nav-closed')
        imgReplace.src = "./img/style/menu.svg";
    }
}
