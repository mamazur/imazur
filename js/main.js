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

/* Image modal */
function toggleModal(img) {
    let modal = document.getElementById('myModal')
    if (modal.classList.contains('closed')) {
        modal.classList.remove('closed')
        modal.scrollTo(0, 0)
        modal.children.item(1).src = img.src
        modal.children.item(1).alt = img.alt
    } else {
        modal.classList.add('closed')
    }
}

/* Close Image modal by using ESC aswell */
document.addEventListener('keydown', closeModalWithESC);

function closeModalWithESC(e) {
    let modal = document.getElementById('myModal')
    if (e.keyCode == 27 && !modal.classList.contains('closed')) {
        modal.classList.add('closed')
    }
}
