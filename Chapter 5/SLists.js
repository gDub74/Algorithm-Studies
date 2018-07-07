//ES5 implimentation

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



//ES6 implimentation

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}


class SList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addFront(value) {
		var n = new Node(value);
		if(this.head) {
			n.next = this.head;
		}
		this.head = n;
		this.length ++;
		return this;
	}
	
	removeFront(){
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length --;
		return this;	
	}
	

	//method to determine the value of the first object that was added to the list/ or the object that has been there the longest.
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

	// method to check if given value is in list
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

	// don't need this since I made the length a property of the Slist class
	// getLength(){
	// 	if (!this.head){
	// 		return 0;
	// 	}
	// 	var count = 1;
	// 	var curr = this.head;
	// 	while (curr.next){
	// 		count ++;
	// 		curr = curr.next;
	// 	}
	// 	console.log('length:', count)
	// 	return this;
	// }

	display(){
		var result = [];
		if (!this.head){
			console.log(result);
			return result;
		}
		var curr = this.head;
		while(curr){
			result.push(curr.val);
			curr = curr.next;
		}
		console.log(result);
		return this;
	}
	addBack(data) {
		var n = new Node(data);
		if(!this.head) {
			this.head = n;
			return this;
		}
		var curr = this.head;
		while(curr.next) {     // move to end of list
			curr = curr.next;
		}
		curr.next = n;
		this.length++;
		return this;
	}

	minToFront() {
		// check all to find smallest value
		// move to front
		// keep track of beforeMin and min
		if(!this.head) {
			return null;
		}
		if(this.head.next == null) {
			return this;
		}

		var min = this.head;
		var beforeMin = this.head;
		var curr = this.head;
		while(curr.next) {
			if(curr.next.val < min.val) {
				beforeMin = curr;
				min = curr.next;
			}
			curr = curr.next;
		}

		beforeMin.next = min.next;
		min.next = this.head;
		this.head = min;
		// going to return this, but only because we've built display;
		return this;
	}

	maxToBack(){
		if (!this.head){
			return null;
		}
		if (this.head.next == null){
			return this;
		}
		var max = this.head;
		var beforeMax = this.head;
		var curr = this.head;
		while (curr.next){
			if (curr.next.val > max.val){
				beforeMax = curr;
				max = curr.next;
				}
			curr = curr.next;	
			}
		curr.next = max;
		beforeMax.next = max.next;
		max.next = null;
		return this;
	}
	//return Slist reversed
	reverse(){
		if (!this.head){
			return this;
		}
		// need curr, previous, next nodes as vars
		var curr = this.head;
		var prev = null;
		var nextNode;
		while (curr){
			nextNode = curr.next;
			curr.next = prev;
			prev = curr;
			curr = nextNode;
		}
		//since curr is null now, prev is the last node in the original list which needs to be set to the head
		this.head = prev;
		return this;
	}
	shiftRightBY(num){
		if (!this.head){
			return null;
		}
		// set some vars to help keep track of necessary infop for a shitf
		var curr = this.head;
		var prev = null;
		//run shiftBy num times
		//to compensate for large shifts take the remainder of the num/list length
		var shift = num % this.length;
		//console.log('length:', this.length,  'Input num:' ,num, 'shift: by', shift);
		for (var i = 0; i < shift ; i++){
			//find the last node and set to curr
			while(curr.next){
				prev = curr;
				curr = curr.next;
			}
			//shift the pointers
			curr.next = this.head;
			this.head = curr;
			prev.next = null;
		}
		return this;
	}
	interleave() {
        // fast fail, if there are less than 3 nodes, interleave doesn't make sense
        if(this.length < 3) {
            return this;
        }
        var target = this.head;
        // floor half because we want the node before our target and we're setting curr = curr.next at the end of our loop
        // half helps us find the halfway point in our list
        var half = this.length % 2 === 0 ? (this.length / 2) -1: Math.floor(this.length / 2);
        while(half) {
            target = target.next;
            half--;
        }
        // setup all the necessary pointers so we don't lose any of our nodes
        var after = target.next;
        var curr = this.head;
        // whiteboards are great
        // target.next is the one we're going to move
        while(target.next) {
            target.next = after.next;
            after.next = curr.next;
            curr.next = after;
             //conditional to break out if we have entered the while loop an extra time in the case of even length queues
            if (curr.next.next){
                curr = curr.next.next;
                after = target.next;
            } else {
                break;
            }
        }
        // don't forget the tail!
        this.tail = target;
        return this;
    }
}


// should write some tests for this for practice

var list = new SList();
// list.addFront(1).addFront(2).addFront(3).addFront(4).addFront(5).addFront(6).addFront(7).addFront(8).display();
list.addBack(1).addBack(2).addBack(3).addBack(4).addBack(5).addBack(6).addBack(7).addBack(8).display();
console.log(list);
// list.reverse().display()
// list.shiftRightBY(99).display();
list.interleave().display();




// list.getLength();
// console.log(list);
// list.display();
// list.maxToBack();
// list.length();
// list.display();



// // list.removeFront();
// console.log('head value:',list.front());
// list.removeFront()
// console.log('head value:',list.front());
// console.log(list.contains(1));
// console.log(list);
// console.log(list.removeFront());