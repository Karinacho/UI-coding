 function toggleDarkLight() {
    const body = document.querySelector('body');
    const switchButton = document.querySelector('#theme-switcher');

    switchButton.addEventListener('click', () => {
        body.classList.toggle('active');
        switchButton.classList.toggle('switch-active');
    })
 }

 toggleDarkLight()