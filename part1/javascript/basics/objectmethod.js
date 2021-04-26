console.log('Hello world from objectmehod.js')

// Defining method inside object
const person = {
    name: 'Felix Andersen',
    age: 20,
    education: 'CompSci',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`) // This refer to the object where this method resides
    },
    doAddition: function (a, b) {
        console.log(a + b)
    }
}

// Add method after the object is created
person.growOlder = function () {
    this.age += 1
}

console.log(person.age) // 20
person.growOlder()
console.log(person.age) // 21

// Call the method directly from the object
person.doAddition(5, 6) // 11

// Store doAddition method reference and call it from a variable
const referenceToAddition = person.doAddition
referenceToAddition(45, 6) // 51

// Here, "this" works fine as it refer to the person object
person.greet()

// Store greet method reference and call it from a variable
const referenceToGreet = person.greet
referenceToGreet() // Here, "this" refer to the global object

// Solve "this" problem by using .bind to bind it to the original object
setTimeout(person.greet.bind(person), 1000)