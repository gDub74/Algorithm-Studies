// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go



//grab last character and shorten lenght of string by 1
//build new string with first charaster as tempo and then coincat rest of string 
// repeat until amount of rotation is 0


function stringRotate(str, amount){
    if (amount === 0){
        return str;
    }
    let temp = str[str.length-1];
    let subString = str.slice(0, -1);
    str = temp + subString;
    return stringRotate(str, amount-1);
}


console.log(stringRotate('abcd',2));
console.log(stringRotate("Boris Godunov",5));