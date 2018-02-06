// Given two separate head nodes to a link list that contains one digit for each of its values: return the sum of the two numbers.

// That's to say, given:
// num1: head(val=7) -> next(val=0) -> next(val=1)
// num2: head(val=4) -> next(val=3) -> next(val=2)
// return 701 + 432 => 1133 as a linked list:
// head(val=1) -> next(val=1) -> next(val=3) -> next(val=3)
// Your func itself should look like this: function add(head_node1, head_node2) {... Variable names are changeable as you'd like them to be (ofcourse).  Bonus points  (really, the only way it should be done): Don't use the tester's toInt-method or anything like it [it has its own issues...heh, AKA: Try to only "sum" one digit at a time...].


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

//driver function 
function solution(head1, head2){
    var num1 = numFromList(head1,getLength(head1));
    var num2 = numFromList(head2,getLength(head2));
    var sum = sumListResults(num1, num2);
    return listFromSum(sum);
}

function getLength(headNode){
    var length = 0;
    var curr = headNode;
    while (curr){
        length ++;
        curr = curr.next;
    }
    return length;
}

function numFromList(headNode, length){
    //grab values, multiply values based on their 10 to the n place, add vlues given list with 
    //nodes of values 7, 0, 1 return 701
    var num = 0;
    var curr = headNode;
    for (var i = length-1; i >= 0; i--){
        num += (curr.value) * Math.pow(10,i);
        curr = curr.next;
    }
    return num;
}

function sumListResults(num1, num2){
    // console.log(num1, num2);
    return num1 + num2;
}

function listFromSum(sum){
    //make new nodes for each value, extract digits and place as values in nodes
    var num = sum.toString(10);
    for (var i = 0; i < num.length; i++){
        var idxValue = parseInt(num[i]);
        if (!headNode){
            var headNode = new Node(idxValue);
            var curr = headNode;
        }
        else{
            curr.next = new Node(idxValue);
            curr = curr.next
        }
    }
    return headNode
}

