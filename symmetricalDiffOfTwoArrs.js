// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Order doesn't matter on return array.


const testa = [[1, "calf", 3, "piglet"], [1, "calf", 3, 4]]; // should return ["piglet", 4].
const testb = [[], ["snuffleupagus", "cookie monster", "elmo"]]; // should return ["snuffleupagus", "cookie monster", "elmo"].
const testc = [[1, "calf", 3, "piglet"], [1, "calf", 3, 4]]; // should return an array with two items.
const testd = [[], ["snuffleupagus", "cookie monster", "elmo"]]; // should return an array with three items.
const teste = [[1, "calf", 3, "piglet"], [7, "filly"]]; // should return [1, "calf", 3, "piglet", 7, "filly"].
const testf = [[1, "calf", 3, "piglet"], [7, "filly"] ];// should return an array with six items.
const testg = [["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]]; // should return an empty array.

//copy longer of two arrays into newArr
// loop through shorter of two and if any matched values swap it in newArr to last position and pop value
//return newArr

function diffOfArrs(arr1, arr2) {
    let newArr = [];
   
    // find the longer of the two arrays and copy it into newArr
    let shorterArr
    if (arr1.length >= arr2.length) {
        newArr = [...arr1];
        shorterArr = arr2;
    } else {
        newArr = [...arr2];
        shorterArr = arr1;
    }

    // loop thru shorter and compare to newArr's values, if a match in newArr then overWright current with last then pop or shorten length by 1 else push f=value into newArr
    for (let i = 0; i < shorterArr.length; i++) {
        let inBoth = false;
        for (let j = 0; j < newArr.length; j++) {
            if (shorterArr[i] === newArr[j]) {
                newArr[j] = newArr[newArr.length - 1];
                newArr.length--;
                inBoth = true;
            } 
        }
        if (inBoth === false) {
            newArr.push(shorterArr[i]);
        }
    }

    console.log(arr1, arr2);

    return newArr;
}

// console.log(diffOfArrs(testa[0], testa[1]));

function symmetricalDiff(arr1, arr2) {
    newArr = []
    const obj1 = {};
    const obj2 = {};

    for (val of arr1) {
        obj1[val] = null;
    }
    
    for (val of arr2) {
        obj2[val] = null;
    }

    for (key in obj1) {
        let  inBoth = false
        for (k in obj2) {
            if (k === key) {
                inBoth = true;
            }
        }
        if (!inBoth) {
            newArr.push(key)
        }
    }

    for (key in obj2) {
        let inBoth = false
        for (k in obj1) {
            if (k === key) {
                inBoth = true;
            }
        }
        if (!inBoth) {
            newArr.push(key)
        }
    }


    console.log(obj1);
    console.log(obj2);
    return newArr;
}

console.log(symmetricalDiff(teste[0], teste[1]));