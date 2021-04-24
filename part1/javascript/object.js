console.log('Hello world from object.js')

person1 = {
    name: {
        'firstName': 'Felix',
        'lastName': 'Andersen',
    },
    age: 20,
    hobbies: ['anime', 'gaming', 'movies', 'music'],
}

console.log(person1) // Print the whole object
console.log(person1.name) // Print the name value of person1 object
console.log(person1['age']) // Print the age value of person1 object

// Add property to an object on the fly
person1.favoriteGame = 'csgo'
console.log(person1)