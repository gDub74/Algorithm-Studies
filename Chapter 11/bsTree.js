class BSTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }
  
    add(value) {
        const n = new BSTNode(value);
        this.size++;
        if (!this.root) {
            this.root = n;
            return this;
        }
        let curr = this.root;
        while (curr) {
            if (n.val >= curr.val) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = n;
                    break;
                }
            } else {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = n;
                    break;
                }
            }
        }
        return this;
    }
  
    contains(val) {
        if (!this.root) {
            return false;
        }
        let curr = this.root;
        while (curr) {
            if (curr.val === val) {
                return true;
            }
            if (val > curr.val) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return false;
    }
  
    min() {
        if (!this.root) {
            return null;
        }
        let curr = this.root;
        let min = this.root.val;
        while (curr.left) {
            min = curr.left.val;
            curr = curr.left;
        }
        return min;
    }
  
    max() {
        if (!this.root) {
            return null;
        }
        let curr = this.root;
        let min = this.root.val;
        while (curr.right) {
            min = curr.right.val;
            curr = curr.right;
        }
        return min;
    }
  
    isEmpty() {
        return !this.root;
    }
  
    height(node = this.root) {
        if (!(node instanceof BSTNode)) {
            return null;
        }
        if (!node) {
            return 0;
        }
        const leftDepth = this.height(node.left);
        const rightDepth = this.height(node.right);
        return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
    }
    

    heightLeftEqualRight(node = this.root) {
        
        if (!(node instanceof BSTNode)) {
            return null;
        }
        if (!node) {
            return false;
        }
        return this.height(node.left) === this.height(node.right) ? true : false;
    }
    
    isBalanced(node = this.root) {
        if (!(node instanceof BSTNode)) {
            return null;
        }
        if (!node) {
            return true;
        }
        // check difference in height between keft and right branch or sub brnch
        if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) {
            return false
        }
        this.isBalanced(node.left);
        this.isBalanced(node.right);
        
        // // look left
        // if (node.left) {
        //     this.isBalanced(node.left);
        //     this.isBalanced(node.right);
        // }
        // // look right
        // if (node.right) {
        //     this.isBalanced(node.left);
        //     this.isBalanced(node.right);
        // }
        // // if we passe all conditionals then Balanced
        return true;
    }

    arrayToBST(array) {
        let value;
        let firstHalf;
        let secondHalf;
        if (array.length > 1) {
            // if (array.length % 2 == 0) {
            //     value = array[(array.length / 2) - 1];
            //     //save first half upto but not including new node val
            //     firstHalf = array.slice(0, (array.length / 2) - 1);
            //     //save second half starting after new node val
            //     secondHalf = array.slice(array.length / 2);
            //     console.log(firstHalf, secondHalf);
            // } else {
            //     value = array[Math.floor(array.length / 2)];
            //     firstHalf = array.slice(0, Math.floor(array.length / 2));
            //     secondHalf =  array.slice(Math.floor(array.length / 2)+1);;
            //     console.log(firstHalf, secondHalf);
            // }
            value = array[Math.floor(array.length / 2)];
            firstHalf = array.slice(0, Math.floor(array.length / 2));
            secondHalf =  array.slice(Math.floor(array.length / 2)+1);;
            console.log(firstHalf, secondHalf);
            this.add(value);
            this.arrayToBST(firstHalf);
            this.arrayToBST(secondHalf);
        } else { 
            // array length now 1
            if (array[0]) {
                this.add(array[0]);
            }
            return this
        }
    }
}


// let tree = new BST();
// tree.add(20).add(10).add(30).add(40);
// console.log(tree.height());
// console.log(tree.heightLeftEqualRight());
// console.log(tree.isBalanced());

const myTree = new BST();
let myArray = [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
myTree.arrayToBST(myArray);
console.log(myTree);
console.log(myTree.isBalanced());
