// POSITION ROBOT

	const circle = document.querySelector('.robot-circle');
    const width = parseFloat(window.getComputedStyle(circle).getPropertyValue('width').replace('px', ''));
    const height = parseFloat(window.getComputedStyle(circle).getPropertyValue('height').replace('px', ''));
    const robotImg = document.querySelector('.robot-img');
    const top = parseFloat(window.getComputedStyle(circle).getPropertyValue('top').replace('px', ''));
    circle.style.height = `${width}px`;

window.addEventListener('resize', () => {
    const circle = document.querySelector('.robot-circle');
    const width = parseFloat(window.getComputedStyle(circle).getPropertyValue('width').replace('px', ''));
    const height = parseFloat(window.getComputedStyle(circle).getPropertyValue('height').replace('px', ''));
    const robotImg = document.querySelector('.robot-img');
    const top = parseFloat(window.getComputedStyle(circle).getPropertyValue('top').replace('px', ''));
    circle.style.height = `${width}px`;
});

