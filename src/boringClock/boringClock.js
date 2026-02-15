
function updateTIme() {
    const clockPlaceholder = document.getElementById('boring-clock');
    const currentTime = new Date();
    clockPlaceholder.textContent = currentTime.toLocaleTimeString();
}

setInterval(() => updateTIme(),  1000)