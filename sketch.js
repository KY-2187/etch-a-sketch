const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');

let isMouseDown = false;
let color = 'default';
let gridSize = 32;
let cellSize = '19px';

function createGrid(gridSize, cellSize) {
    document.addEventListener("mouseup", function() {
        isMouseDown = false;
    });
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            grid.appendChild(cell);
    
            cell.addEventListener('mousedown', function(e) { 
                e.preventDefault();
                isMouseDown = true;
                if (color === 'default') {
                    cell.style.backgroundColor = '#353535'; 
                } else if (color === 'rainbow') {
                    cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                } else if (color === 'eraser') {
                    cell.style.backgroundColor = '#f0f0f0';
                }
            });
    
            cell.addEventListener('mousemove', function() {
                if (isMouseDown) {
                    if (color === 'default') {
                        cell.style.backgroundColor = '#353535';
                    } else if (color === 'rainbow') {
                        cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    } else if (color === 'eraser') {
                        cell.style.backgroundColor = '#f0f0f0';
                    }
                }
            });
        
            cell.addEventListener('mouseup', function() {
                isMouseDown = false;
            });
        }
    }
}

function deleteCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.remove();
    })
}

createGrid(gridSize, cellSize);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'small') {
            deleteCells();
            gridSize = 16;
            cellSize = '40px';
            createGrid(gridSize, cellSize);
        } else if (button.id === 'medium') {
            deleteCells();
            gridSize = 32;
            cellSize = '19px';
            createGrid(gridSize, cellSize);
        } else if (button.id === 'large') {
            deleteCells();
            gridSize = 64;
            cellSize = '8.5px';
            createGrid(gridSize, cellSize);
        } else if (button.id === 'default' || button.id === 'rainbow' || button.id === 'eraser') {
            color = button.id;
        } else if (button.id == 'clear') {
            deleteCells();
            createGrid(gridSize, cellSize);
        }
    })
})