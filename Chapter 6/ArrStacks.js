
// stack using an array
class Stack{
    constructor(val){
        this.stack = []
        this.length = 0;
        
    }
    push(val){
        this.stack.push(val)
        this.length ++;
        return this;
    }
    //returns last in and pop's it out of the stack
    pop(){
        var top_val = this.stack.pop();
        this.length --;
        return top_val;
    }
    //return top val without removing it from the stack
    top(){
        return this.stack[this.stack.length-1];
    }
}




var x = new Stack();
x.push('1').push('a').push(2).push('[x,y,z]').push([{'hello':'world'}]).push(999)
console.log(x.stack)
console.log('top val:', x.top())
console.log('stack length',x.length);

console.log('pop top val:',x.pop());
console.log('stack length',x.length);
console.log(x.stack);
console.log('top val:', x.top());

