
// let inputNumber = prompt("Enter a positive integer");
// intInput = parseFloat(inputNumber);


// while (Number.isInteger(intInput) == false || intInput < 0) {
//     let inputNumber = prompt("Enter a positive integer");
//     intInput = parseFloat(inputNumber);

//     if (Number.isInteger(intInput) == true) {
//         alert("Hi");
//     }
// }

// Filter out some special characters.
function inputFilter(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
        return Number(value)} 
    else {
        return NaN
    }
}
// Prompt the loop to enter a positive number.
promt4Loop:for (;;) {
var text = prompt('Enter a positive integer');
var n = inputFilter(text);
var prime = [];
    if (!isNaN(n)&&n>0) break;
}
// Show the prime numbers of the input number.
function showPrime(n) {
    for (let i = 2; n>i; i++){
        if(!isPrime(i)) continue;
            else if(isPrime(i)){
                prime.push(i)
            }   
    }
alert("The prime numbers of " + n + ' are '+ prime)
}
// Check the input that have the prime numbers or not.
function isPrime(n) {
for (let i = 2; n>i; i++) {
    if (n%i == 0) 
        return false;
}
return true;
}

showPrime(n);
