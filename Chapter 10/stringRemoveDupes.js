// String: Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

test = "Snaps! crackles! pops!"

function rRemoveDupesString(string, index = string.length, checkerArr=[]){
    //state to check for recursion
    if (index >= 0){
        // check to see if current index in the string is in the checker array
        let inArr = false;
        for (let j = checkerArr.length-1; j>0; j-- ){
            if (checkerArr[j] === string[index]){
                inArr = true;
            }
        }
        //if not then push it in there
        if (!inArr){
            console.log(checkerArr);
            checkerArr.push(string[index])
        }
        return rRemoveDupesString(string, --index, checkerArr);
    }
    //build string
    let str = ''
    console.log(checkerArr);
    for (let i = checkerArr.length-1; i > 0; i --){
        str += checkerArr[i]
    }
    return str;
}

console.log(rRemoveDupesString(test));


