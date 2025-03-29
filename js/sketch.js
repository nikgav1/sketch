 export default class Sketch{
    constructor(sketchSize, gridSize, container){
        this.sketchSize = sketchSize;
        this.gridSize = gridSize;
        this.container = container;
    }
    createGrid(){
        // Initializes the grid container with Flexbox
        const gridPlaceHolder = document.getElementById(this.container)

        gridPlaceHolder.style.display = "flex";
        gridPlaceHolder.style.flexWrap = "wrap";
        gridPlaceHolder.style.width = `${this.sketchSize}px`;
        gridPlaceHolder.style.height = `${this.sketchSize}px`;

        const cellSize = this.sketchSize / this.gridSize // Size of each cell
        const numberOfCells = Math.pow(this.gridSize, 2) // Total number of cells
        
        // Creates the entire grid
        for(let i = 0; i < numberOfCells; i++){
            // Creates a single grid cell with hover effect
            const cell = document.createElement("div")
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            cell.classList.add("gridElement")

            // Add hover effect to turn the cell black
            cell.addEventListener("mouseover", () =>{
                const newRgb = this.#randomRGB()
                cell.style.backgroundColor = `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`
            })
            gridPlaceHolder.appendChild(cell);
        }
    }
    removeGrid(){
        // Iterate through every cell and delete it
        const gridPlaceHolder = document.getElementById(this.container)
        while (gridPlaceHolder.firstChild) {
            gridPlaceHolder.removeChild(gridPlaceHolder.lastChild);
          }
    }
    #randomRGB(){
        const rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        return rgb
    }
}