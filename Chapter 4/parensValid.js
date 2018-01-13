
//given an input string, returns a boolean weather parentheses in string are valid - open and closed is valid...


//firt thought is to count number of "(" and  ")" and if th enumber is the same then its a valid string
//next trick is to make sure you dont have any ')' before '(' - so a conditional that does a check everytime 
//you see a closed parentheses - check this before you check for open paren...

//test cases
x = 'X(0)12the((gMoney)test)';  //should return true
y = 'X(0)12t(he((gMo(ney)test)' //should return false
z = 'ThisIs)onlyA(test' //should return false


function parensValidifier(str){
    openCount = 0;
    closedCount = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == ')'){
            closedCount ++;
            if (closedCount > openCount){  //checks for valid opening parentheses 
                return false;
            }
        } 
        if (str[i] == '('){
            openCount ++;
        }
    }
    // console.log(openCount);
    // console.log(closedCount);
    if (openCount == closedCount) {
        return true;
    }
    else {
        return false;
    }
}

console.log(parensValidifier(x));
console.log(parensValidifier(y));
console.log(parensValidifier(z));