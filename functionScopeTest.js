


//returning a child scoped function, then setting that to a var, then using that var to call the parent function and in turn the child functfunction.

function counter(){
var count = 0;
//vars declared here are available in the function and in the child finction, but not globally our of the parent function.

    function childScope(){
        // vars declared here are local to this scope
        var childContent = 'child';
        console.log('counting');
        return ++count;         // ++ before the var does operation before it gets returned.
    }

    return childScope;
}

x = counter();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());

