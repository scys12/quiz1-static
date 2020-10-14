const animateHometownBox = (e) => {
    const lineBefore = e.srcElement.querySelector('.line-before');
    const lineAfter = e.srcElement.querySelector('.line-after');
    lineBefore.style.width = '200px';
    lineAfter.style.width = '200px';
}

const removeanimateHometownBox = (e) => {
    const lineBefore = e.srcElement.querySelector('.line-before');
    const lineAfter = e.srcElement.querySelector('.line-after');
    lineBefore.style.width = '';
    lineAfter.style.width = '';
}

const boxContainer = document.querySelector('.hometown-box')
boxContainer.addEventListener('mouseenter', animateHometownBox)
boxContainer.addEventListener('mouseleave', removeanimateHometownBox)