export function stickyNavbar(nav, mainNav, dropMenu, giveMargin){
    window.addEventListener('scroll', () => {
        if (window.scrollY > 67) {
            nav.style.position = "fixed";
            mainNav.style.display = "none";
            dropMenu.style.position = "fixed";
            dropMenu.style.marginTop = "52px";
            if (giveMargin == true) {
                nav.style.marginTop = "-2rem"
                dropMenu.style.marginTop = "1rem"
            }
        }
        else{
            dropMenu.style.position = "static";
            dropMenu.style.marginTop = "0px";
            nav.style.position = "relative";
            if (giveMargin == true) {
                nav.style.marginTop = "0rem";
            }
            mainNav.style.display = "flex";
        }
    })            
}

export function responsiveNav(Menu, dropMenu){
    let navOpen = false;

Menu.addEventListener('click', () => {
    if (navOpen == false) {
        dropMenu.style.display = "block";
        dropMenu.style.animation = "drop 0.5s";    
        navOpen = true;
    }
    else{
        dropMenu.style.animation = "catch 0.5s";
        setTimeout(() => {
            dropMenu.style.display = "none";
        }, 400);
        navOpen = false;
    }
})
}
