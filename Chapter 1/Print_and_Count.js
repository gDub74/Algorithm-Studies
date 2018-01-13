//print all integer multiples of 5, from 521 to 4096. Then log how many there were.

count = 0;
for (var i = 512; i<= 4096; i++) {
    if (i%5 == 0) {
        count ++;
        console.log(i, "is a multiple of 5");
    }
}

console.log("There are", count, "multiples of 5 between 512 and 4096");

