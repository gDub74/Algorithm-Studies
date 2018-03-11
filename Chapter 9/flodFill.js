//canvas 

var canvas = [
    [3,2,3,4,3],
    [3,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3] 
]


var xy = [2,2];
//canvas is matrix , start is array with [x,y] , color
function recurFill(canvas,start, color){
    var x = start[0]; //left right so second in matrix world
    var y = start[1]; // up down so 1's in matrix world
    console.log(`${y}, ${x}`);
    var target = canvas[y][x];
    canvas[y][x] = color;
    //lookup
    if (y - 1 >= 0 && canvas[y-1][x] === target){
        console.log("found up");
        recurFill(canvas,[x, y-1], color);
    }
    //lookdown
    if (y + 1 < canvas.length && canvas[y+1][x] === target){
        console.log("found down");
        recurFill(canvas,[x, y+1], color);
    }
    // lookleft
    if (x - 1 >= 0 && canvas[y][x-1] === target){
        console.log("found left");
        recurFill(canvas,[x-1, y], color);
    }
    //lookright
    if (x + 1 < canvas[y].length && canvas[y][x+1] === target){
        console.log("found right");
        recurFill(canvas,[x+1, y], color);
    }
    return canvas;
}

//driver function 
function floodFill(canvas,start,color) {
    //purpose to convert so when x,y == 0,0 [x,y] represents botom left of canvas
    var x = start[0];
    var y = canvas.length - 1 - start[1];
    return recurFill(canvas, [x, y], color);
}

console.log(floodFill(canvas, xy, 9));

