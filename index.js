// add two number

var num1 = '30'
var num2 = '30';
console.log(par);

var sum = parseInt(num1) + parseInt(num2);
console.log(sum);

// find the square root and check

var num = prompt("Write your num:")
var outputResult = Math.sqrt(num);


if (Number.isInteger(outputResult)) {
    console.log("This result is", outputResult)
}
if (!Number.isInteger(outputResult)) {
    console.log("This number is decimal", outputResult)
}