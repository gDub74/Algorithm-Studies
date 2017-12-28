/* return the sum of all jintigers from 0 to given num except for when the count is evenly divisable by 3 - skip;
If current count is exactly 1/3 of num return -1.
num=4 returns 7; num=8 returns  34 ; num+15 returns -1 */


function messyMath(num){
    var sum = 0;
    for (var i=0;i<=num;i++){
        if (i*3 == num){
            return -1;
        }
        else if (i % 3 == 0){
            continue;
        }
        else if(i % 7 == 0){
            sum += i*2;
        }
        else {
            sum += i;
        }
    }
    
    return sum;
}

console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));