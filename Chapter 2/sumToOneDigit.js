/* Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.”
*/

function oneDigitizer(num){
    var digitSum= 0;
    while (num > 10){
        while (num/10 > 1){
            var lastDigit = num % 10; //extract last digit
            digitSum += lastDigit; //add up last digits
            num = Math.trunc(num/10); //shorten number 
        }
        digitSum += num; //add the leftover digit from original number
        num = digitSum;  //swap the digit sum into the num variable
        digitSum = 0; //reset the digit sum for next pass on loop
    }

    if (num == 10){  //special case where digit sum is 10
        return 1;
    }
    else {
        return num;
    }
}


console.log(oneDigitizer(378));
console.log(oneDigitizer(7));
console.log(oneDigitizer(123));
console.log(oneDigitizer(99981));