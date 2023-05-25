const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');

let isMouseDown = false;

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
                cell.style.backgroundColor = '#353535'; 
            });
    
            cell.addEventListener('mousemove', function() {
                if (isMouseDown) {
                    cell.style.backgroundColor = '#353535';
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

createGrid(16, '40px');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'small') {
            deleteCells();
            createGrid(16, '40px');
        } else if (button.id === 'medium') {
            deleteCells();
            createGrid(32, '19px');
        } else if (button.id === 'large') {
            deleteCells();
            createGrid(64, '8.5px');
        }
    })
})