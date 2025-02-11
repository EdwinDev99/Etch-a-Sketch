const container = document.querySelector('.container');
const resolutionLabel = document.querySelector('.resolutionLabel');
const input = document.querySelector('.input');
const defaultColor = document.querySelector(".default")
const randomColor = document.querySelector(".color")
const reset = document.querySelector('.reset')


reset.addEventListener("click",() => location.reload() )

let numSquares = 8;
let type = "defaultColorMode"; 

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
        square.addEventListener('mouseover', changeColor); 
        container.appendChild(square);
    }
}


function changeColor (e){
    if(type === "randomColor"){
        const randomR = Math.floor(Math.random()*256)
        const randomG = Math.floor(Math.random()*256)
        const randomB = Math.floor(Math.random()*256)
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
    }else if(type === "defaultColorMode"){
        e.target.style.backgroundColor = "lightpink"
    }
}


function activateButton(selected, other) {
    selected.classList.add("active");
    other.classList.remove("active");
}

defaultColor.addEventListener("click", function () {
    type = "defaultColorMode";
    activateButton(this, randomColor);
});

randomColor.addEventListener("click", function () {
    type = "randomColor";
    activateButton(this, defaultColor);
});


