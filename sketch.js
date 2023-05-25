const grid = document.querySelector('#grid');

let isMouseDown = false;

document.addEventListener("mouseup", function() {
    isMouseDown = false;
});

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
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