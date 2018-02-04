class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// single limked queue
class SLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        var n = new Node(val);
        if (!this.head){
            this.head = n;
            this.tail = n;
        }
        else{
            this.tail.next = n;
            this.tail = n;
        }
        return this;
    }

    dequeue(){
        if (!this.head){
            return null
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        console.log('the head value was:', temp.val)
        return temp.val;
    }
    
}



x = new SLQueue();
x.enqueue('a').enqueue('b').enqueue('c');
console.log(x);
x.dequeue();
console.log(x);
