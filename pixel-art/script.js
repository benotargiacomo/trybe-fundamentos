// const boardSizeButton = document.getElementById('generate-board');
// let boardSizeInput = document.getElementById('board-size');
// boardSizeButton.addEventListener('click', function(){
//   createPixelBoard(boardSizeInput.value);
// })
window.onload = function () {
  // RANDOM COLORS
  function randomNumber() {
    return Math.floor(Math.random() * 255);
  }
  let setColors = {
    aColor: 'rgb(0, 0, 0)',
    bColor: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
    cColor: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
    dColor: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
  }
  selectedColor = setColors.aColor;
  let randomColors = document.getElementsByClassName('color');
  randomColors[0].style.backgroundColor = setColors.aColor;
  randomColors[1].style.backgroundColor = setColors.bColor;
  randomColors[2].style.backgroundColor = setColors.cColor;
  randomColors[3].style.backgroundColor = setColors.dColor;

}

// COLOR PICK
const colorSelection = document.getElementsByClassName('color');
for (let i = 0; i < colorSelection.length; i += 1) {
  colorSelection[i].addEventListener('click', function (ev) {
    for (let j in colorSelection) {
      colorSelection[j].className = 'color';
    }
    ev.target.className = 'color selected';
    selectedColor = ev.target.style.backgroundColor;
    console.log(ev.target.style.backgroundColor);
  })
}

// CLEAR BUTTON;
const clearButton = document.querySelector('#clear-board');
const boardSize = document.getElementsByClassName('pixel');
const defaultColor = 'rgb(255, 255, 255)';

clearButton.addEventListener('click', function () {
  for (let i = 0; i < boardSize.length; i += 1) {
    boardSize[i].style.backgroundColor = defaultColor;
  }
})

// BOARD CREATION
function createPixelBoard(n) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < (n * n); i += 1) {
    let pixels = document.createElement('div');
    pixels.className = "pixel";
    pixels.style.backgroundColor = defaultColor;
    pixelBoard.appendChild(pixels);
  }
}
createPixelBoard(5);

// BRUSH
function paintBrush() {
  for (let i = 0; i < boardSize.length; i += 1) {
    boardSize[i].addEventListener('click', function (ev) {
      ev.target.style.backgroundColor = selectedColor;
      console.log('click');
    })
  }
}
paintBrush();
