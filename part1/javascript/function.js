console.log('Hello world from function.js')

// Standard arrow function declaration
const sum = (num1, num2) => {
    console.log(num1)
    console.log(num2)
    return num1 + num2
}

let result = sum(4, 5)
console.log('4 + 5: ' + result)

// Parentheses can be ommitted if the parameter is only one
const square = num => {
    console.log(num)
    return num * num
}

result = square(5)
console.log('5**2: ' + result)

// Braces can even be ommitted if there's only one expression
// The function below basically means it returns num * num
const anotherSquare = num => num * num

result = anotherSquare(8)
console.log('8**2: ' + result)

// Single line function combined with map
const t = [1, 3, 5]
// .map create new array by applying the single line function on each t's individual item
const tSquared = t.map(val => val * val) 
console.log(tSquared)