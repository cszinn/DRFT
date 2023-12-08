const button = document.getElementById('colorChangeBtn');

button.addEventListener('click', () => {
  animateBackground();
});

function animateBackground() {
  const body = document.body;
  let yPos = 0;
  const speed = 5;

  function changeColor() {
    const red = Math.sin(speed * yPos + 0) * 127 + 128;
    const green = Math.sin(speed * yPos + 2) * 127 + 128;
    const blue = Math.sin(speed * yPos + 4) * 127 + 128;
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    yPos += 0.1; // Ajuste a velocidade vertical conforme desejado
    requestAnimationFrame(changeColor);
  }

  changeColor();
}
