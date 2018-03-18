// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"]. 



function stringToWordsArray(str, index=0, temp='', result=[]){
    //if there are still characters in the string
    if (index < str.length){
        //character os space?
        if ( !(str[index] === ' ') ){
            temp += str[index];
        } else {
            //push word and reset temp
            result.push(temp);
            temp = '';
        }
        return stringToWordsArray(str, index+1, temp, result)
    }
    // push last word
    result.push(temp);
    console.log(result);
    return result;
}


const str1 = "Life is not a drill!"
stringToWordsArray(str1);