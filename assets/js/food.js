const displayMenuSection = (e) => {
    const _this = e.srcElement;
    _this.style.width = '150px';
    const arrowContainer = document.querySelector('.icon-container');
    arrowContainer.style.display = 'none';
    
    const sections = document.querySelectorAll('section');
    sections.forEach( (section, idx) => {
        const dataSection = decodeDataSection(sections, idx);
        const newLink = addLinkSectionToMenu(dataSection);        
        _this.appendChild(newLink);
        newLink.addEventListener('click', scrollToSection.bind(this, section.id))
    });        
}

const decodeDataSection = (sections, idx) => {
    if (idx == 0)
        dataSection = [sections[idx].querySelector('h1').innerText, '0 10px 0 0'];
    else if (idx == sections.length-1)
        dataSection = [sections[idx].querySelector('h1').innerText, '0 0 10px 0'];
    else dataSection = [sections[idx].querySelector('h1').innerText, ''];
    return dataSection;
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

const slideDown = (className, element) => {
    const _this = element.srcElement;
    const container = _this.querySelector(`.${className}-description-container`);
    container.style.height = `${container.scrollHeight}px`;
};
const slideUp = (className, element) => {
    const _this = element.srcElement;
    const container = _this.querySelector(`.${className}-description-container`);
    container.style.height = ``;
}

const foodContainers = document.querySelectorAll('.food-item');
foodContainers.forEach( container => {
    container.addEventListener('mouseenter', slideDown.bind(this, 'food'))
    container.addEventListener('mouseleave', slideUp.bind(this, 'food'))
});

const touristContainers = document.querySelectorAll('.tourist-item');
touristContainers.forEach( container => {
    container.addEventListener('mouseenter', slideDown.bind(this, 'tourist'))
    container.addEventListener('mouseleave', slideUp.bind(this, 'tourist'))
});