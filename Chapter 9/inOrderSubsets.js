// function inOrderSubsets(str){
//     var result = [''];
//     function recurse(prefix, str) {
//         for (var i = 0; i < str.length; i++) {
//             result.push(prefix + str[i]);
//             recurse(prefix + str[i], str.slice(i + 1));
//         }
//     }
//     recurse('', str);
//     return result;
// }
// const x = 'abc'

// console.log(inOrderSubsets(x));


//Keoni G's algo from above refactored...

function inOrderSubsets( str, prefix='', result = ['']) {
    for (var i = 0; i < str.length; i++) {
        result.push(prefix + str[i]);
        inOrderSubsets(str.slice(i + 1), prefix + str[i], result);
    }
    return result;
}

const x = 'abcd'

console.log(inOrderSubsets(x));