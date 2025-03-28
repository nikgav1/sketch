import Sketch from "./sketch.js"

// Default settings
let sketchSize = 850
let gridSize = 10

// Create and initialize grid
let sketch = new Sketch(sketchSize, gridSize, "container")
sketch.createGrid()

const changeSkecthButton = document.getElementById("changeSkecthButton")
const numberInput = document.getElementById("number-input")

changeSkecthButton.addEventListener("click", () => {
    const number = numberInput.value;
    sketch.removeGrid();
    sketch = new Sketch(sketchSize, number, "container");
    sketch.createGrid();
})