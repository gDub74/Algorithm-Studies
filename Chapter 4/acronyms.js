//create a function that given a string returns the string's acronym (first letters of each word only - capitolized)


var x = 'One for the money, two for the show'

function acronymizer(str){
    var acronym = str[0];
    for (var i = 0; i < str.length; i++){
        if (str[i] == ' '){
            acronym += str[i+1]
        }
    }
    return acronym.toUpperCase();
}

console.log(acronymizer(x));

