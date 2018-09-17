// “Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.”



const x = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";  // true
const y = "D(i{a}l[ t]o)n{e";  // false
const z = "A(1)s[O (n]0{t) 0}k"; // false
const z2 = "{{(())}}"; // true

function bracesValid(str) {
    const braceType = {
      '}': '{',
      ']': '[',
      ')': '('
    }
    let opens = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
        opens.push(str[i]);
      } else if (braceType[str[i]] && braceType[str[i]] !== opens.pop()) {
          // not valid here because closed type not last open type
          return false;
      }
    }
    // accounts for more open than closed
    return opens.length ? false : true;
  }



console.log(bracesValid(x));
console.log(bracesValid(y));
console.log(bracesValid(z));
console.log(bracesValid(z2));
