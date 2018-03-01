
//tests
var x= [[1,2,[3]],4];
var y = [1,[2,3,4,[5,6,7,[8],9],10],11]

function arrFlatterizer(arr){
    var flatArr = [];
    var arrContainsArrs = false
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) !== 'number'){
            temp = arr[i];
            var arrContainsArrs = true;
            for (var j = 0; j<temp.length; j++){
                flatArr.push(temp[j]);
            }
            }else{
            flatArr.push(arr[i]);   
        }
    }
    if (arrContainsArrs == false){
        return flatArr;
    }
    else{
        return arrFlatterizer(flatArr);
    }
}

console.log(arrFlatterizer(x));
console.log(arrFlatterizer(y));