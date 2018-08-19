var sizeOfTable = 800;
var sizeOfCells = sizeOfTable/8;
var row = 0;
var col = 0;

function setup() {
    createCanvas(sizeOfTable + 1, sizeOfTable + 1);
    background(0);

    stroke(0);
    fill(color(0));
    
    for(var i = 0; i<width; i+=sizeOfCells){
        row++;
        for(var j=0; j<height; j+=sizeOfCells){
            push();
            if(col % 2 == 0){
                fill(color(255));
            }
            rect(i,j,sizeOfCells,sizeOfCells);
            pop();
            col++;
        }
    }
}
