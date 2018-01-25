
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
		var pointer = this.head;
		// look through list
		while (pointer.next != null){
			pointer = pointer.next;
		}
		return pointer.val;
	}

	//function to check if given value is in list
	valueInList(searchVal){
		var pointer = this.head;
		//fast exit check
		if (pointer.val == null){
			return null;
		}
		//fast exit check
		if (pointer.val == searchVal){
			return true;
		}
		while (pointer.next != null){
			//console.log('pointer val:', pointer.val, 'search val:', searchVal);
			if (pointer.val == searchVal){
				return true;
			}
			else{
				pointer = pointer.next;
			}
		}
		if (pointer.next == null && pointer.val == searchVal){
			return true;
		}
		else{
			return false;
		}
	}
}

var list = new SList();
console.log(list);
list.addFront(1).addFront(2).addFront(3);
console.log(list);
// list.removeFront();
console.log(list);
console.log('first value in list:', list.firstValue());
console.log(' 0 In list?', list.valueInList(0));
console.log('1 In list?', list.valueInList(1));
console.log('2 In list?', list.valueInList(2));
console.log('3 In list?', list.valueInList(3));
console.log('4 In list?', list.valueInList(4));
list.addFront('hello');
console.log(list);
console.log('hello In list?', list.valueInList('hello'));
console.log('world In list?', list.valueInList('world'));
list.removeFront();
console.log('hello In list?', list.valueInList('hello'));
