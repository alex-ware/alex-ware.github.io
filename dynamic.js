function setGradient() {
    const direction = Math.random() > 0.5 ? 'to right' : 'to left';
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    document.body.style.background = 'linear-gradient(${direction}, ${color1}, ${color2})';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setGradient();

setInterval(setGradient, 5000);