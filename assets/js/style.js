const buttons = document.querySelectorAll("[class*= 'btn-primary']");
const showLineBottomWhenHover = (e) => {
    const lineBottom = e.srcElement.querySelector('.button-line-bottom');
    lineBottom.style.width = '100%';
}
const hideLineBottomWhenHover = (e) => {
    const lineBottom = e.srcElement.querySelector('.button-line-bottom');
    lineBottom.style.width = '';
    lineBottom.style.height = '0px';
    lineBottom.style.height = '';
}
buttons.forEach( button => {
    button.addEventListener('mouseenter', showLineBottomWhenHover);
    button.addEventListener('mouseleave', hideLineBottomWhenHover);
})

const moveToFoodSection = (e) => {
    const foodSection = document.querySelector('.food-wrapper');
    const topPos = foodSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: topPos,
        behavior: "smooth",
    });
}

const giveNavbarShadow = (e) => {
    const welcomeWrapper = document.querySelector('.welcome-wrapper');
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    const topPos = welcomeWrapper.getBoundingClientRect().height-navbarWrapper.getBoundingClientRect().height;
    if (window.scrollY >= topPos) {
        navbarWrapper.style.boxShadow = '1px 3px 12px 6px var(--shadow-color-dark)';
    }else{
        navbarWrapper.style.boxShadow = '';
    }
}

window.addEventListener('scroll', giveNavbarShadow);

const arrow = document.querySelector('.fa-angle-down');
arrow.addEventListener('click', moveToFoodSection);
