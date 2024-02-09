//OnLoad functions
window.onload = () => {
    //Handle scroll events
    window.addEventListener('scroll', function (e) {
        window.scrollY > 100 ?
            this.document.querySelector("header").classList.add('is-scrolling') :
            this.document.querySelector("header").classList.remove('is-scrolling');
    })

    //Hamburger Menu
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
    
}




