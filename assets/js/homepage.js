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