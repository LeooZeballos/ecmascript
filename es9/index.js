// * Spread operator
// Returns an array of the elements in an array-like object

const obj = {
    name: 'Leonel',
    age: 21,
    country: 'AR'
}

let { country, ...all } = obj;
console.log(all)

// * Rest operator
const obj1 = {
    ...obj,
    country: 'AR',
}

console.log(obj1)

// * Promise Finally
// Allows us to execute a function when a promise is resolved or rejected
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(hello => console.log(hello))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))


// * Regex
// Regular expressions are used to match or search text
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2019-01-01')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)