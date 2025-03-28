 export default class Sketch{
    constructor(sketchSize, gridSize, container){
        this.sketchSize = sketchSize;
        this.gridSize = gridSize;
        this.container = container;
    }
    createGrid(){
        const gridPlaceHolder = document.getElementById(this.container)

        gridPlaceHolder.style.display = "flex";
        gridPlaceHolder.style.flexWrap = "wrap";
        gridPlaceHolder.style.width = `${this.sketchSize}px`;
        gridPlaceHolder.style.height = `${this.sketchSize}px`;

        const cellSize = this.sketchSize / this.gridSize
        const numberOfCells = Math.pow(this.gridSize, 2)

        for(let i = 0; i < numberOfCells; i++){
            const cell = document.createElement("div")
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            cell.classList.add("gridElement")

            // Add hover effect to turn the cell black
            cell.addEventListener("mouseover", () =>{
                cell.style.backgroundColor = "black"
            })
            gridPlaceHolder.appendChild(cell);
        }
    }
}