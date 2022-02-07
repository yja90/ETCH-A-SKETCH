//create button that allows you to switch between rainbow and black/White
//need to remove event listener after second click



//Global variables
const mainContainer = document.querySelector('#mainContainer');
let gridColor = document.getElementsByClassName('row')
const grid16 = document.querySelector('#grid16');
const grid32 = document.querySelector('#grid32');
const grid64 = document.querySelector('#grid64');
const resetGrid = document.querySelector('#resetGrid');
const blackWhiteColor = document.querySelector('#blackWhiteColor')
const rubber = document.querySelector('#rubber')
const rainbowColors = document.querySelector('#rainbowColors')
let gridSize = 0
let totalGridSize






createGrid(16, '2.5vw')



// creates Grid and assigns the correct style
function createGrid(gridSize, style) {
  for (i = 0; i < (gridSize * gridSize); ++i) {
    let grid = document.createElement('div')
    mainContainer.appendChild(grid).className = 'row';
    grid.style.width = style
    grid.style.height = style
    gridColor[i].addEventListener('click', () => {
      color('#484848')
    })
  }
  totalGridSize = mainContainer.childElementCount
}

function rainbowColor (){
  for (i = 0; i < (totalGridSize); ++i) {
    gridColor[i].addEventListener('mouseover', function() {
      let colors = ['#ff3366', '#ff6633', '#FFCC33', '#33FF66', '#33FFCC', '#33CCFF', '#3366FF', '#6633FF', '#CC33FF'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.backgroundColor = randomColor

    })
}}

function removeEvent (){
  gridColor.addEventListener('click',color, false)
}

blackWhiteColor.addEventListener('click', () => {
  color('#484848')
})
rubber.addEventListener('click', () => {
  color('#e6e6ff')
  removeEvent ()
})

rainbowColors.addEventListener('click', rainbowColor)

//Function that allows you to change color of grid
function color(color) {
  for (i = 0; i < totalGridSize; ++i) {
    gridColor[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = color

    })

  }
}




// function to clear grid
function clearGrid(totalGridSize) {
  for (i = 0; i < totalGridSize; i++) {
    let mainGrid = document.querySelector('.row');
    mainGrid.remove();
  }
}


// Button to change grid size

grid16.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(16, '2.5vw');
})


grid32.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(32, '1.25vw');
})


grid64.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(64, '0.625vw');
})


//Button to reset grid
resetGrid.addEventListener('click', () => {
  clearGrid(totalGridSize)
  createGrid(16, '2.5vw');
})
