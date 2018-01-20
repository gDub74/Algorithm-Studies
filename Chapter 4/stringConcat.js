//no builtins - concat multiple strings into one string


x = "abc"
y = "xyz"

// expected output --> 'abcxyz'


function concaterizor(str1,str2){
    newStr = ''
    for (var i = 0; i < str1.length; i++){
        newStr += (str1[i]);
    }
    for (var i = 0; i < str2.length; i++){
        newStr += (str2[i]);
    }
    console.log(newStr);
    return newStr;
}

concaterizor(x,y);
