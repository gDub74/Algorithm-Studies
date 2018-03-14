



function rTrib(num, x = 0, y = 0, z = 1){
    // if (num < 0){
    //     return 0;
    // }
    while (num){
        return rTrib(num-1, y, z, x+y+z);
    }
    return x;
}

console.log(rTrib(6));