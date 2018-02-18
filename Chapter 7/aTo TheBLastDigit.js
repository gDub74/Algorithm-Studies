

x = (3,4)


function aToTheBLastDigit(a,b){
    var result = 1;
    for (var i = 0; i < b; i++){
        result = a * result;
    }
    console.log('result', result);
    var lastDigit = result % 10;
    console.log('last digit', lastDigit)
}

aToTheBLastDigit(237,0);
