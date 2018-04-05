// You are given a string containing chars ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ can be substituted. Write a recursive function to return array of all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string functions such as slice(), use them sparingly, as they are expensive.

str = '??' ['1', '0']
str1  = "?????" //  [10, 11]
str2 = '?1?'  // ['1000', '1001', '1100', '1101']
//everytime we hit a ? we need t
function binaryStrExpansion(str, index=0, arr=['']){
    //fast fail to end recursion
    if (index == str.length){
        return arr;
    }
    if (str[index] !== '?'){
        for(let j = 0; j<arr.length; j++){  
            arr[j] += str[index];
        } 
    } else {  // arr.length *2 , first half should start with value from previous first half, second half shouls start with values from prev second half
        let currLength = arr.length;
        let k = 0;
            while (k < currLength){
                arr[k + currLength] = arr[k]
                k++
                if (k < arr.length/2){
                }
               
            }
        // arr.length *= 2;
        
        
        for (let l = 0; l < arr.length; l++){
            if (l < arr.length/2){
                // arr[l] = arr[1];
                arr[l] += '0';
            } else {
                // arr[l] = arr[0];
                arr[l] += '1';
            }
        }
    }

    return binaryStrExpansion(str, ++index, arr);
}

console.log(binaryStrExpansion(str1)); //['101', '111']
// console.log(binaryStrExpansiob(str2)); //['101', '111']

