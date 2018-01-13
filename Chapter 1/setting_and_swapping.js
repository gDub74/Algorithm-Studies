var myNumber = 42;
var myName = "Greg";

console.log('my name is', myName);
console.log('my number is', myNumber);


function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
   
}

console.log('now swap!!!');

swap(myNumber, myName);
console.log('now my name is', myName);
console.log('now my number is', myNumber);
