
/* assume that any/all/ or none of the 5 natural disasters could happen - write a function to
describe what might befall our victum Kenny.
 */


function uncertianDisaster(){
    var event = '';
    var volcano = Math.random();
    var tsunami = Math.random();
    var earthquake = Math.random();
    var blizzard = Math.random();
    var meteor = Math.random();
    //console.log(volcano, tsunami, earthquake, blizzard, meteor);
    if (volcano*100 < 10){
        event += ' volcano';
    }
    if (tsunami*100 < 15){
        event += ' tsunami';
    }
    if (earthquake*100 < 20){
        event += ' earthquake';
    }
    if (blizzard*100 < 25){
        event += ' blizzard';
    } 
    if (meteor*100 < 30){
        event += ' meteor';
    }
    else {
        event = ' All clear today!!!';
    }
    return event;
}

// log out 100 days of disaster forcast
for (var i = 1; i <= 100; i++){
    console.log('day',i,uncertianDisaster());
}