// create a function that, given a string, returns all of that string's contents, but without any blanks.
// "Pl ayTha t Fu nky M usi c" returns 'PlayThatFunkyMusic'\

x = "Pl ayTha t Fu nky M usi c"

function blankRemover(str){
    var new_arr = [];
    var new_string = '';
    for (var i = 0; i < str.length; i++){
        if (str[i] != ' '){
        new_string += str[i];     
        }
    }
    return new_string;
}


console.log(blankRemover(x));

