//check to see if an intiger greater than 1 is a prime number

function primeChecker(num){
    for (var i=2; i<num; i++){
        if (num % i == 0){
            return `${num} is not a prime number, it is divisable by ${i}`;
        }
    }
    return `${num} is a prime number`;
}



console.log(primeChecker(2));
console.log(primeChecker(3));
console.log(primeChecker(4));
console.log(primeChecker(5));
console.log(primeChecker(6));
console.log(primeChecker(7));
console.log(primeChecker(8));
console.log(primeChecker(9));
console.log(primeChecker(10));
console.log(primeChecker(11));
console.log(primeChecker(12));
console.log(primeChecker(13));
console.log(primeChecker(15));
console.log(primeChecker(25));
console.log(primeChecker(77));
console.log(primeChecker(199));

