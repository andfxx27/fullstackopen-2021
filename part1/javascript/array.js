console.log('Hello world from array.js')

const basicArrayUsage = () => {
    // Basic array usage
    const num = [1, -1, 3]

    num.push(5) // Add 5 to the end of num -> modify the original array

    console.log(num.length) // 4
    console.log(num[1]) // -1

    num.forEach(val => {
        console.log(val)
    })

    // Take num's content [1, -1, 3, 5], append it with 6 and return the newly created array
    // .concat doesn't modify the original array
    const newNum = num.concat(6)

    console.log('num contains: ' + num)
    console.log('newNum contains: ' + newNum)

    // Map method in JavaScript
    // .map create new array based on old array, and applying the callback function on each individual item
    const map1 = num.map(val => val * 2)
    console.log('map1 contains: ' + map1) // [2, -2, 6, 10] -> basically old array but multiplied by 2

    const htmlElements = num.map(val => `<li>${val}</li>`)
    console.log(htmlElements)
}

const arrayDestructuring = () => {
    const t = [1, 2, 3, 4, 5]

    const [first, second, ...rest] = t
    console.log(first, second) // 1, 2
    console.log(rest) // [3, 4, 5]
}

arrayDestructuring()