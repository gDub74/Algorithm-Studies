//Create a function that, given a string, returns the integer made from the strings digits.
//Given "0s1a3y5w7h9a2t4?6!8?0” ==> return 1357924680

x = '0s1a3y5w7h9a2t4?6!8?0';

function digitsOnly(str){
    var digits = '';
    for (var i=0; i< str.length; i++){
        if (str[i] == 0 || str[i] == 1 || str[i] == 2 || str[i] == 3 || str[i] == 4 || str[i] == 5 || str[i] == 6 || str[i] == 7 || str[i] == 8 || str[i] == 9){
            digits += str[i];
        }
    }
    return parseInt(digits, 10); //converts string to number in base 10 
}

console.log(digitsOnly(x));



