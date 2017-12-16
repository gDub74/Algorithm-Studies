//add odd intigers from -300,000 to 300,000 and console.log the sum

//if the range of numbers to be added is the same distance from 0 in the positive and negative direction  (example: -25 to 25, -500 to 500, -300,000 to 300,000)the sum of the intigers or the sum of any subset of the integers will always be 0.


function oddAdder(lowNum,highNum){
    var sumOdds = 0;
    if (highNum + lowNum == 0) {
        console.log(" the sum of all your odd numbers is 0 because the sum of your two numbers is 0")
    }
    else{
        for (var i = lowNum; i <= highNum; i++){
            console.log('number',i);
            if (i%2 == 1 || i%2 == -1){
                sumOdds += i;
                console.log('sum of odds', sumOdds);
            }

        }
        console.log('The sum of all odd intigers in the range is',sumOdds);
    }
}


oddAdder(-20,20);
oddAdder(-300,300);
oddAdder(0, 7);