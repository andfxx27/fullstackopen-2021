console.log('Hello world from class.js')

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`)
    }
}

const person1 = new Person('Felix Andersen', 20)
person1.greet()

const person2 = new Person('Kenny Schrub', 26)
person2.greet()