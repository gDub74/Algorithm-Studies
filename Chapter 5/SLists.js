
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
	firstInValue(){
		if (this.head == null){
			return null;
		}
		var pointer = this.head;
		while (pointer.next != null){
			pointer = pointer.next;
		}
		return pointer.val;
	}
}

var list = new SList();
console.log(list);
list.addFront(1).addFront(2).addFront(3);
console.log(list);
list.removeFront();
console.log(list);
console.log('first value in list:', list.firstInValue());

