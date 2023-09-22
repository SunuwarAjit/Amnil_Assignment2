//Q1

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//Q2

function factorial(x) {
     // if number is 0
    if (x === 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
const num = 3;
// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//Q3


function checkPalindrome(str) {

    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const str = "happy is what i feel"

// call the function
const value = checkPalindrome(str);

console.log(value);


//Q4

function longest(str){
    // Split the string into array
    str = str.split(" ");
         
    // Get the index of largest item of the array
    let index = str.reduce((acc, curr, i)=>{
        if(curr.length > str[acc].length){
        return i
        }
        return acc;
    }, 0)
         
    return str[index];
    }
     
     
    console.log(longest("what is the longest word in this sentence"))


//Q5

function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }   
    }
}
fizzBuzz();

//Q6
function arraySum(){
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < arr.length; i++ ) {
    sum += arr[i];
    }

    console.log(sum) 
}
arraySum();

//Q7
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');

  }
  const title="This is a title";
  const result= titleCase(title);
  console.log(result);

//Q8

  function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

const string = "This is a example String"
const result = countVowel(string);
console.log(result);

//Q9

//Q12
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"]; 
function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));

//Q14
let A = [ 1, 2, 3, 5 ];
let B = [ 6, 7, 8, 9 ];
    
function mergeTwo(A, B)
{
    // Get sizes of vectors
    let m = A.length;
    let n = B.length;
 
    // Vector for storing Result
    let D = [];
 
    let i = 0, j = 0;
    while (i < m && j < n) {
 
        if (A[i] <= B[j])
            D.push(A[i++]);
        else
            D.push(B[j++]);
    }
 
    // B has exhausted
    while (i < m)
        D.push(A[i++]);
 
    // A has exhausted
    while (j < n)
        D.push(B[j++]);
 
    return D;
}

const result = mergeTwo(A, B)
console.log(result);

//Q1

