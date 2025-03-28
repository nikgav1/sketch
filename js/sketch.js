 export default class Sketch{
    constructor(sketchSize, gridSize, container){
        this.sketchSize = sketchSize;
        this.gridSize = gridSize;
        this.container = container;
    }
    createGrid(){
        const gridPlaceHolder = document.getElementById(this.container)
        const cellSize = this.sketchSize / this.gridSize
        const numberOfCells = Math.pow(this.gridSize, 2) - this.gridSize
        for(let i = 0; i < numberOfCells; i++){
            const cell = document.createElement("div")
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            cell.classList.add("gridElement")
            cell.addEventListener("mouseover", () =>{
                cell.style.backgroundColor = "black"
            })
            gridPlaceHolder.appendChild(cell);
        }
    }
}