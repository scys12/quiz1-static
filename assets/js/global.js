const scrollToNextSection = (e) => {
    const section = e.srcElement.closest('section');
    const nextSection = section.nextElementSibling;
    const topPos = nextSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: topPos,
        behavior: "smooth",
    });
}

const giveNavbarShadow = (e) => {
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    const navbarNextSection = navbarWrapper.nextElementSibling;
    const topPos = navbarNextSection.getBoundingClientRect().height-navbarWrapper.getBoundingClientRect().height;
    if (window.scrollY >= topPos) {
        navbarWrapper.style.boxShadow = '1px 3px 12px 6px var(--shadow-color-dark)';
    }else{
        navbarWrapper.style.boxShadow = '';
    }
}

window.addEventListener('scroll', giveNavbarShadow);

const arrow = document.querySelector('.fa-angle-down');
arrow.addEventListener('click', scrollToNextSection);