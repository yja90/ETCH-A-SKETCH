const mainContainer = document.querySelector('#mainContainer');
let grid
let gridSize = 0
let totalGridSize
let gridColor = document.getElementsByClassName('row')
let random_color

createGrid(16, '2.5vw')


// creates Grid and assigns the correct style
function createGrid(gridSize, style) {
  for (i = 0; i < (gridSize * gridSize); i++) {
    grid = document.createElement('div')
    // rows.setAttribute("id", "mainGrid");
    mainContainer.appendChild(grid).className = 'row';
    grid.style.width = style
    grid.style.height = style
    for (i = 0; i < gridColor.length; i++){
      gridColor[i].addEventListener('mouseover',changeColor)
    }
  }
  totalGridSize = mainContainer.childElementCount
}


//random colors aren't working, why not?

function randomColors(){
  let colors = ['#ff0000', '#00ff00', '#0000ff'];
  random_color = colors[Math.floor(Math.random() * colors.length)];
  return (random_color, colors[random_color]);
}


//Function to change background color of div elements
function changeColor(){
  let randomColor = randomColors()
  this.style.backgroundColor = randomColor
}


// function to clear grid
function clearGrid(totalGridSize) {
  for (i = 0; i < totalGridSize; i++) {
    let mainGrid = document.querySelector('.row');
    mainGrid.remove();
  }
}


// Button to change grid size
const grid16 = document.querySelector('#grid16');
grid16.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(16, '2.5vw');
})

const grid32 = document.querySelector('#grid32');
grid32.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(32, '1.25vw');
})

const grid64 = document.querySelector('#grid64');
grid64.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(64, '0.625vw');
})


//Button to reset grid
const resetGrid = document.querySelector('#resetGrid');
resetGrid.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(16, '2.5vw');
})
