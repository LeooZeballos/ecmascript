// * replace vs replaceAll
// Replace all occurrences of a substring in a string
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";
const replacedString1 = string.replace("Javascript", "Java");
console.log(replacedString1);
const replacedString2 = string.replaceAll("Javascript", "Java");
console.log(replacedString2);

// * Private methods
// Private methods are methods that are not accessible from outside the class.
class Message {
    #show(val) {
        console.log(val);
    }
}

const message = new Message();
message.show("Hello");

// * Promise any
// Returns a promise that resolves to the first value that is not undefined or null.
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then(val => console.log(val));


// * Weakref
// Weak references are references to objects that are not strongly held by the garbage collector.
class AnyClass {
    constructor(element) {
        this.weakRef = new WeakRef(this);
    }
    // {...}
}

// * New logic operators
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); // false
console.log(isTrue ||= isFalse); // false
console.log(isTrue ??= isFalse); // false
