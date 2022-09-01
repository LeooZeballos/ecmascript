// * Object entries
// Returns an array of [key, value] pairs for every entry in the object

const data = {
    frontend: 'Alejo',
    backend: 'Leonel',
    design: 'Julian'
}

const entries = Object.entries(data)
console.log(entries)

// * Object values
// Returns an array of values for every entry in the object
const values = Object.values(data)
console.log(values)

// * Object keys
// Returns an array of keys for every entry in the object
const keys = Object.keys(data)
console.log(keys)

// * Padding
// Adds padding to a string
const string = 'Hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-'))
console.log('food'.padEnd(12, ' -'))

// * Trailing commas
// Adds a trailing comma to the last element of an array
const obj = {
    name: 'Alejo', // <----- trailing comma
}

// * Async Await
// Allows us to write asynchronous code in a synchronous manner
const helloWorld = async () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello World'), 3000) : reject(new Error('Test Error'))
    }
    )
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()
