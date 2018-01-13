/* What disaster will befall Kenny today? there is a 10%chance of volcano erupting, 15% chance tsunami,
20%chance earthquake, 25% chance blizzard, 30 % chance of a meteor falling on him. 
 */


 function disaster(){
    var event = '';
    var eventChance = (Math.random()*100);
    console.log(eventChance);
    if (eventChance<10){
        event = 'volcano';
    }
    else if (eventChance >= 10 &&  eventChance < 25){
        event = 'tsunami';
    }
    else if (eventChance >= 25 && eventChance < 45){
        event = 'earthquake';
    }
    else if (eventChance >= 45 && eventChance < 70){
        event = 'blizzard';
    } 
    else{
        event = 'meteor';
    }
    return event;
 }


console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());
console.log(disaster());