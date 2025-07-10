let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW


function leetTranslator(string){
    let newString = string.toLowerCase();
    let mapObj = {};
    let encryptedString = '';

    for (let i=0; i<letters.length;i++) {
         mapObj[letters[i]] = leetChars[i];
        }

    for(let j=0; j<newString.length; j++){
        encryptedString += mapObj[newString[j]];
    }

    return encryptedString;

}

console.log(leetTranslator('fullstack'));