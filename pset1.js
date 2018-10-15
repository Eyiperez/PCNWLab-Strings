/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = function (str){
    if (str.length % 2 === 0){
    //console.log('hello')
    return str
     } 
     return `${str}#`
}
console.log(makeEven('taq'));
console.log(makeEven('john'));

/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = (str)=>(str[str.length-1]);

/*const getLastChar = (str)=>{
    //const lastChar= str.length-1
    //return (str[lastChar]);
    //return (str[str.length-1]);
}
*/
console.log(getLastChar('taq'));
console.log(getLastChar('erika'));


/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = str=>{
    if (str.length < 3) 
    return 'not enough characters!'
    return (str[2]);
}

console.log(get3rdChar('taq'));
console.log(get3rdChar('mo'));
console.log(get3rdChar('elephant'));

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str =>{
    if (str.length < 3) 
    return 'not enough characters!'
    return (str[str.length-3]);
}
console.log(get3rdCharFromEnd('taq')); // 't'
console.log(get3rdCharFromEnd('mo')); // 'not enough characters!'
console.log(get3rdCharFromEnd('taq karim')); // 'r'

/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
const startsWithVowel= (str)=>{
    str=str.toLowerCase();
if ((str[0]==='a')||(str[0]==='e')||(str[0]==='i')||(str[0]==='o')||(str[0]==='u'))
    return true
    return false
}
console.log(startsWithVowel('taq')); // false
console.log(startsWithVowel('Dfghjkl')); // false
console.log(startsWithVowel('andy')); // true
console.log(startsWithVowel('Andy')); // true
console.log(startsWithVowel('Endy')); // true


/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
console.log('-----------------------------');

const endsWithVowel=(str)=>{
    str=str.toLowerCase();
    const endsWith = (str[str.length-1])
if ((endsWith==='a')||(endsWith==='e')||(endsWith==='i')||(endsWith==='o')||(endsWith==='u'))
    return true
    return false
}
console.log(endsWithVowel('taq')); // false
console.log(endsWithVowel('Dfghjkl')); // false
console.log(endsWithVowel('andi')); // true
console.log(endsWithVowel('AndI')); // true
console.log(endsWithVowel('Endo')); // true


/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
console.log('-----problem7----');

const hasVowels = str =>{
    const findVowel = str.match(/['aeiouAEIOU']/);
    if (findVowel){
        return true
    }
    return false
}
console.log(hasVowels('taq')); // true
console.log(hasVowels('TAQ')); // true
console.log(hasVowels('dfghjkl')); // false
console.log(hasVowels('taq karim')); // true


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/
console.log('---problem8----');
// this function only solves if all string is uppercase
const isUpperCase =str =>{
    if (str === str.toUpperCase()){
        return true
    }
    return false
}

//const isUpperCase =str =>str === str.toUpperCase()) true:false

console.log(isUpperCase('taq')); // false
console.log(isUpperCase('TAQ')); // true
console.log(isUpperCase('dfghjkl')); // false
console.log(isUpperCase('AASDFGHJK')); // true

// this is the function that solves problem 8
console.log('----problem8real----');
const hasUpperCase = str =>{
    const findUppCase = (/[A-Z]/.test(str));
    if (findUppCase){
        return true
    }
    return false
}

console.log(hasUpperCase('tAq')); // true
console.log(hasUpperCase('TAQ')); // true
console.log(hasUpperCase('dfghjkl')); // false
console.log(hasUpperCase('AASDhGHJK')); // true

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/
console.log('----problem9----');

const isPalindromic = str =>{
    const reverse =str.split('').reverse().join('');
    if (reverse===str){
        return true
    }
    return false
}

console.log(isPalindromic('racecar')); // true
console.log(isPalindromic('racecars')); // false
console.log(isPalindromic('bats see bees stab')); // false
console.log(hasUpperCase('taq karim')); // false


/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

