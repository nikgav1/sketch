import Sketch from "./sketch.js"

// Default settings
let sketchSize = 960
let gridSize = 16

// Create and initialize grid
let sketch = new Sketch(sketchSize, gridSize, "container")
sketch.createGrid()

const changeSkecthButton = document.getElementById("changeSkecthButton")
const numberInput = document.getElementById("number-input")

changeSkecthButton.addEventListener("click", () => {
    const number = numberInput.value;
    if(number < 3 || number > 100){
        alert("Enter Valid Number")
    }
    else{
        sketch.removeGrid();
        sketch = new Sketch(sketchSize, number, "container");
        sketch.createGrid();
    }
})