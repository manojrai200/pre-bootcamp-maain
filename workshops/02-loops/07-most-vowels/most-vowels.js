// ### Most Vowels

// Define a function, `mostVowels`, that accepts one argument, a string of words.

// `mostVowels` should return the word that has the most vowels.

// ```javascript
// mostVowels('I am a keeper with some real rhythms'); // => keeper
// ```

// If none of the words have any vowels, return an empty string.

// ```javascript
// mostVowels('try my gym'); // => ''



function mostVowels(string){
    let words = string.replace(/[.,!?]/g, '').split(' ');
    let maxCount = 0;
    let wordWithMostVowels = '';
    const vowels = 'aeiouAEIOU';
   for(let i = 0; i < words.length; i++){
    let count = 0;
    for(let k = 0; k < words[i].length; k++){
        if(vowels.includes(words[i][k])){
            count++;
        }
    }

    if(count > maxCount){
        maxCount = count;
        wordWithMostVowels = words[i];
    }
   }
return wordWithMostVowels;   
}

console.log(mostVowels('Give her hell from us, Peeves.'))
