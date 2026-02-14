function createCounter() {
    let clicks = 0;
    let $button = document.querySelector('#counter-button');
    let $spanCounter = $button.querySelector('span');

    $button.addEventListener('click', () => {
        clicks++;

        $spanCounter.textContent = `${clicks}`

    })
}

createCounter();