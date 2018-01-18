// “Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.”

//note: this is a work in progress, also I have learned a much easier way to do this where you set up an object which holdes matching pairs of braces as keys and values and then you can use that as a reference to check your current strung character value...


x = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";  //true
y = "D(i{a}l[ t]o)n{e"  //false
z = "A(1)s[O (n]0{t) 0}k"  //false

function braceValidifer(str){
    var parenOpenCount = 0;
    var parenClosedCount = 0;
    var curlyOpenCount = 0;
    var curlyClosedCount = 0;
    var squareOpenCount = 0;
    var squareClosedCount = 0;

    //loop through string and count number of open and closed braces
    for (var i = 0; i<str.length; i++){
        if (str[i] == ')'){
            parenClosedCount ++;
            if (parenClosedCount > parenOpenCount){  //check to see if closed bracket before open
                return false;
            }
        }
        if (str[i] == '('){
            parenOpenCount ++;
        }
        if (str[i] == '}'){
            curlyClosedCount ++;
            if (curlyClosedCount > curlyOpenCount){  //cjeck to see if curley closed before open
                return false;
            }
        }
        if (str[i] == '{'){
            curlyOpenCount ++;
            //look for closed } before any other brace now
            for (var j = i; j< str.length; j++){
                if (str[j] == '}'){
                    break;
                }
                else if (str[j] == '[' || str[j] == ']' || str[j] == '(' || str[j] == ')'){ 
                    return false;
                }
            }  
        }
        if (str[i] == ']'){
            squareClosedCount ++;
            if (squareClosedCount > squareOpenCount){ //check to see if square bracket out of order
                return false;
            }
        }
        if (str[i] == '['){
            squareOpenCount ++;
        }
    }
    console.log(parenOpenCount, parenClosedCount);
    console.log(curlyOpenCount, curlyClosedCount);
    console.log(squareOpenCount, squareClosedCount);

    
    // conditionals comparing counts
    if (parenOpenCount != parenClosedCount || curlyOpenCount != curlyClosedCount || squareOpenCount != squareClosedCount){
        return false
    }
    else{
        return true;
    }
}

console.log(braceValidifer(x));
console.log(braceValidifer(y));
console.log(braceValidifer(z));
