const displayMenuSection = (e) => {
    const _this = e.srcElement;
    _this.style.width = '120px';
    const arrowContainer = document.querySelector('.icon-container');
    arrowContainer.style.display = 'none';
    
    const papeda = addLinkSectionToMenu(['Papeda', '0 10px 0 0']);
    const abon =  addLinkSectionToMenu(['Abon Gulung', '']);
    const sagu =  addLinkSectionToMenu(['Sagu Lempeng', '']);
    const udang = addLinkSectionToMenu(['Udang Selingkuh', '0 0 10px 0']);
    
    _this.appendChild(papeda);
    _this.appendChild(abon);
    _this.appendChild(sagu);
    _this.appendChild(udang);
    
    papeda.addEventListener('click', scrollToSection.bind(this, 'papeda'));
    abon.addEventListener('click', scrollToSection.bind(this, 'abon-gulung'));
    sagu.addEventListener('click', scrollToSection.bind(this, 'sagu-lempeng'));
    udang.addEventListener('click', scrollToSection.bind(this, 'udang-selingkuh'));

}

const addLinkSectionToMenu = ([textName, borderRadius]) => {
    const linkMenu = document.createElement('div');
    linkMenu.className = `left-menu-link menu-even`;
    linkMenu.style.borderRadius = borderRadius;
    linkMenu.innerHTML = textName;
    return linkMenu;
}

const scrollToSection = (idName, e) => {
    const section = document.querySelector(`#${idName}`);
    const parentLeftMenu = e.srcElement.parentNode;
    const activeMenu = parentLeftMenu.querySelectorAll('.left-menu-active');
    activeMenu.length > 0 ? activeMenu[0].classList.remove('left-menu-active') : null;
    e.srcElement.className += ' left-menu-active';
    const topPos = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: topPos,
        behavior: "smooth",
    });
}

const hideMenuSection = (e) => {
    const _this = e.srcElement;
    while(_this.hasChildNodes() && (_this.lastChild !== _this.querySelector('.icon-container'))){
        _this.removeChild(_this.lastChild);
    }
    _this.style.width = '';
    _this.style.height = '';
    const arrowContainer = document.querySelector('.icon-container');
    arrowContainer.style.display = '';
}

const leftMenu = document.querySelector('.left-stick-menu');
leftMenu.addEventListener('mouseenter', displayMenuSection);
leftMenu.addEventListener('mouseleave', hideMenuSection);

const slideDown = element => {
    const _this = element.srcElement;
    const container = _this.querySelector('.food-description-container');
    container.style.height = `${container.scrollHeight}px`;
};
const slideUp = element => {
    const _this = element.srcElement;
    const container = _this.querySelector('.food-description-container');
    container.style.height = ``;
}

const foodContainers = document.querySelectorAll('.food-item');
foodContainers.forEach( container => {
    container.addEventListener('mouseenter', slideDown)
    container.addEventListener('mouseleave', slideUp)
});