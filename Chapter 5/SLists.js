
// function Node(val) {
// 	this.val = val;
// 	this.sayHello = function() {
// 		console.log(this.val);
// 		return this;
// 	}
// }

// Node.prototype.sayWorld = function() {
// 	console.log('world');
// 	return this;
// }


// console.log(myNode.val);
// myNode.sayWorld().sayHello();

// Array.prototype.spitLength = function() {
// 	console.log('the length of this array is ' + this.length);
// 	return this;
// }
// var myArr = [1,2,3,4,5]
// myArr.spitLength()

// var myNode = new Node('hello');
// var other = new Node('world');
// console.log(myNode);
// myNode.sayHello();


class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
var test = new Node();
// console.log('test', test);

class SList {
	constructor() {
		this.head = null;
	}

	addFront(value) {
		var n = new Node(value);
		if(this.head) {
			n.next = this.head;
		}
		this.head = n;
		return this;
	}
	
	removeFront(){
		var temp = this.head;
		if (temp == null){
			return null
		}
		else{
			this.head = this.head.next;
			return this;	
		}
	}

	//function to determine the value of the first object that was added to the list/ or the object that has been there the longest.
	firstValue(){
		if (this.head == null){
			return null;
		}
		var curr = this.head;
		// look through list
		while (curr.next != null){
			curr = curr.next;
		}
		return curr.val;
	}

	//returns value of head node
	front(){
		return this.head.val;
	}

	//function to check if given value is in list
	contains(searchVal){
		//fast exit check
		if (this.head == null){
			return null;
		}
		var curr = this.head;
		while (curr != null){
			if (curr.val == searchVal){
				return true;
			}
			else{
				curr = curr.next;
			}
		}
		return false;
	}
}


var list = new SList();
console.log(list);
list.addFront(1).addFront(2).addFront(3);
console.log(list);
// list.removeFront();
console.log('head value:',list.front());
list.removeFront()
console.log('head value:',list.front());
console.log(list.contains(1));