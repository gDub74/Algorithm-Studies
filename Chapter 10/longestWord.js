// Create a function that, given a string of words, returns the longest word. Example: given "Snap crackle pop makes the world go round!", return "crackle".

// advance through the sentence with recursion and stop when at end of sentence
//store first word in a temp, use space to delenate words
//compare word in temp to next word and keep longest 
// return longest word


function longestWord(sentence, longest='', currWord='', index=0){
    if (index === sentence.length-1){
        return longest;
    }
    //build words
    if (sentence[index] != ' '){
        currWord += sentence[index];
    } else {
        //check currWord aginst longest and keep the longer of the two
        longest = longest.length > currWord.length ? longest : currWord;
        currWord = ''
    }
    return longestWord(sentence, longest, currWord, index+1);
}

console.log(longestWord("Snap crackle pop makes the world go round!"));