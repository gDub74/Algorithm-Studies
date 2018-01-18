//given a string check to see it it is a palindrome and return boolean --don't ignore white space or capitalization


x = "racecar";
y = "Racecar";
z = "r acecar";

function palindromeChecker(str){
    //loop through string half way and compare 1st to last, 2nd to 2nd to last...
    for (var i = 0; i < str.length/2; i++){
        // console.log(str[i]);
        // console.log(str[str.length-1-i]);
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    //if we make it all the way thru the loop then we know it is a palindrome
    return true;
}
s
console.log(palindromeChecker(x));
console.log(palindromeChecker(y));
console.log(palindromeChecker(z));

