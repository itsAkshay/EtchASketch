console.log("START!");

const gridRef = document.querySelector(".Grid");
const clearButton = document.querySelector(".Clear");
const changeSize = document.querySelector(".ChangeSize")
const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 64;
const MIN_GRID_SIZE = 16;

let currentGridSize = DEFAULT_GRID_SIZE;
let sketchColor = "black";

let pixels = Array();

function createGrid(size = DEFAULT_GRID_SIZE)
{
    if(size > MAX_GRID_SIZE || size < MIN_GRID_SIZE)
    {
        console.log(" failed! Grid size exceeds max grid size limit!");
        return;
    }
    console.log("Creating a " + size +" x " + size + " grid");


    //default is column
    for(let i = 0; i < size; i++)
    {
        //create a new div for row
        var row_div = document.createElement("div");
        row_div.className = "GridRow";
        for(let j = 0; j < size;j++)
        {
            //create grid elements
            var div = document.createElement("div");
            div.className = "GridPixel";
        
            row_div.appendChild(div);
            //console.log(div);
            //add event listener
        }
        gridRef.appendChild(row_div);
    }
    pixels = Array.from(document.querySelectorAll('.GridPixel'));
    pixels.forEach(pixel => pixel.addEventListener("mouseover",()=>{
        //console.log(pixel);
        pixel.style.backgroundColor = sketchColor;
    }));    
}

createGrid(64);

clearButton.addEventListener("click",()=>{
    //clear the grid
    console.log("Cleared!");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
});

changeSize.addEventListener("click", ()=>{
    //prompt the user to change the grid size

    console.log("Change size!");

    let newSize = Number(prompt("Enter new grid size:"));
    console.log(newSize);
    gridRef.innerHTML = "";
    createGrid(newSize);
});