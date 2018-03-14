// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1)      gcf(a,b) == a, if a == b;
// 2)      gcf(a,b) == gcf(a-b,b), if a>b;
// 3)      gcf(a,b) == gcf(a,b-a), if b>a.

// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should be able to compute rGCF(123456,987654).

function rGCF(num1, num2){
    if (num1 == num2){
        return num1;
    }
    return (num1 > num2) ? rGCF(num1-num2, num2) : rGCF(num1, num2-num1);
}

console.log( rGCF(20000,750));