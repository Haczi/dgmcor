const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');



const openNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active')
}




navBtn.addEventListener('click', openNav)



const handleCurentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;

}
handleCurentYear();