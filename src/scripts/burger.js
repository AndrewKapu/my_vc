window.onload = () => {
    const burgerBtn = document.getElementById('burger-toggle');
    burgerBtn.addEventListener('click', () => {
        document.getElementById('hero').classList.toggle('opacity');
        document.getElementById('body').classList.toggle('stopScroll');
    });
};