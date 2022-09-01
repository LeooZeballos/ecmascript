// * Array flat
// Returns a new array with all sub-arrays of this array concatenated into it recursively up to the specified depth.
let array1 = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array1.flat(2))

// * Array flatMap
// Returns a new array with all sub-arrays of this array concatenated into it recursively up to the specified depth and then mapped by a function.
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

// * trimStart and trimEnd
// Removes whitespace from the start and end of a string.
let hello = '   Hello World   ';
console.log(hello.trimStart());
console.log(hello.trimEnd());

// * Try catch finally
// Try catch finally is a block of code that is used to handle errors.
try {
    console.log('Hello');
    throw new Error('Error');
} catch(error) {
    console.log(error);
} finally {
    console.log('Finalizado');
}

// * Object fromEntries
// Creates an object from an array of key-value pairs.
const entries = [['name', 'Leonel'], ['age', 21]];


// * Symbol prototype description
// Returns a string description of a symbol.
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);