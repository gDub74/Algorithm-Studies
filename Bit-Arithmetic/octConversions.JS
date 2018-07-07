// convert the following from decimal to octal representation. Example: 31 becomes 0o37.
// 13    6    25    8    45    10    -9    64    255


// decimal to octal conversion
function octConvert(num) {
    let result = '';
    let lastDigit = null;

    lastDigit = num%10;
    num = Math.trunc(num / 10);
    return 2**8;


    // while (num < 0) {

    // }
}


console.log(octConvert(123));