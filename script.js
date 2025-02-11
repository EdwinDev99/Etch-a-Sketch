const container = document.querySelector('.container');
const resolutionLabel = document.querySelector('.resolutionLabel');
const input = document.querySelector('.input');

let numSquares = 8;

input.addEventListener('input', changeSquare);
createGrid(numSquares)


function changeSquare(e) {
    numSquares = e.target.value;
    resolutionLabel.textContent = `${numSquares}x${numSquares}`;
    createGrid(numSquares);
}


function createGrid(size) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';  
    container.style.gap = '2px';

    const squareSize = (100 / size) - 0.5;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}%`;
        square.style.paddingTop = `${squareSize}%`; // Esto hace que sea un cuadrado
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = '#ddd';
        container.appendChild(square);
    }
}

