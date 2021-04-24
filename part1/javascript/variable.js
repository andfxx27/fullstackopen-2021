console.log('Hello world from variable.js')

const x = 1
let y = 5

console.log(x, y) // 1, 5
y += 10
console.log(x, y) // 1, 10
y = 'Variable y is now a string instead of an integer'
console.log(x, y) // 1, 'Variable y ...`

x = 3 // Will throw an error since a const cannot be re-assigned
console.log(x, y)