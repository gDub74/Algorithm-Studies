// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

x =  {"name": "Zaphod", "charm": "high", "morals": "dicey"}

function hashInverter(obj){
    arr1 = [];
    arr2 = [];

    for (var key in obj){
        arr1.push(key);
        arr2.push(obj[key]);
    }

    newObj = {};

    for (var i = 0; i < arr1.length; i++){
        if (!(arr1[i] in newObj)){  
            newObj[arr2[i]] = arr1[i];
        }
    }
    console.log(newObj);
    return newObj;
}

hashInverter(x);

