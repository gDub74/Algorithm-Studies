
// count pairs of socks

function sockMerchant(ar) {
    const socks = {};
    let pairs = 0;
    for (let element of ar){
        // check if type of sock is in obj
        if (!socks[element]){
            socks[element] = 1;
        } else {
            socks[element] += 1;
        }
        if (socks[element] === 2) {
            pairs++;
            socks[element] = 0;
        } 
        console.log(pairs, socks);
    }
    return pairs;
}

const test = [10, 20, 20, 10, 10, 30, 50, 10, 20]


console.log(sockMerchant(test));
