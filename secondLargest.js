x = [42, 1, 7, 3.15, 4, 2]
y = [42];

function secLrgest(arr) {
    if (arr.length < 2) {
        return null
    }
    // grab first two indexes and compare
    let max = arr[0];
    let nextMax = arr[1];

    if (max < nextMax) {
        let temp = max;
        max = nextMax;
        nextMax = temp;
    }

    // loop thru rest of arr and compare
    for (i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            nextMax = max;
            max = arr[i];
        } else if (arr[i] > nextMax) {
                nextMax = arr[i];     
        }
    }
    return nextMax;
}

console.log(secLrgest(x));
console.log(secLrgest(y));