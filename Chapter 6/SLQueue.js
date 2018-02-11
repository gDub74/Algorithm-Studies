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
        this.length = 0;
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
        this.length ++;
        return this;
    }

    dequeue(){
        if (!this.head){
            return null
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        // console.log('the head value was:', temp.val)
        this.length --;
        return temp.val;
    }
    //returns the falue at head of queue
    front(){
        return this.head.val
    }

    // search queue for a node with val
    contains(val){
        if (!this.head){
            return false;
        }
        var curr = this.head;
        while (curr){
            //console.log('curr val', curr.val);
            if (curr.val == val){
                return true;
            }
            else{
                curr = curr.next;
            }
        }
        return false;
    } 
    // check to see if queue is empty
    isEmpyt(){
        if (!this.head){
            return true
        }
        else{
            return false;
        }
    }
    

    //commented out size methid beccause adding this.length to the constructor is much more efficien 
    // return number of vals in queue - this is the long way of doing this.length
    // size(){
    //     if (!this.head){
    //         return 0;
    //     }
    //     else{
    //         var count = 0;
    //         var curr = this.head
    //         while (curr){
    //             count ++;;
    //             curr = curr.next;
    //         }
    //     }
    //     return count;
    // }
}


x = new SLQueue();
console.log('is x empty?', x.isEmpyt());
console.log('does x contain given val:', x.contains('c'));
x.enqueue('a').enqueue('b').enqueue('c');
// console.log('queue size:', x.size()); 
console.log('queue size:', x.length); //.length method 
// console.log(x);
x.dequeue();
console.log(x);
// console.log(x.front());
console.log('does x contain given val:', x.contains('c'));
console.log('is x empty?', x.isEmpyt());
console.log('queue size:', x.length); //.length method 