// * Default Params

// ! before
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

// * es6
function newFunction2(name = 'oscar', age = 23, country = 'MX') {
    console.log(name, age, country);
}

newFunction();
newFunction2();


// * Concatenacion de Strings con ✨Template Literals✨

let hello = 'Hello';
let world = 'World';

// ! before
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// * es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
