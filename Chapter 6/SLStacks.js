class Node{
    constructor(val){
        this.vall = val;
        this.next = null;
    }
}

class SLStack{
    constructor(){
        this.top= null;
        this.size = 0;
    }

    //push a value on top of stack: first set the new node's next to the current top, then set the top to be the new node
    push(val){
        var n = new Node(val);
        if (!this.top){
            this.top= n;
        }
        else{
            n.next = this.top;
            this.top = n;
        }
        this.size ++;
        return this;
    }
    
}


phat_stack = new SLStack('1')
phat_stack.push('1').push('2').push('3')
console.log(phat_stack)