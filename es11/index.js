// * Dynamic import
// Allows to import a module dynamically.
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
})


// * BigInt
const aBigNumber = 9007199254740991n;
console.log(aBigNumber); // 9007199254740991
const anotherBigNumber = BigInt(9007199254740991);
console.log(anotherBigNumber); // 9007199254740991

// * Promise all settled
const promise1 = new Promise((resolve, reject) => reject("error"));
const promise2 = new Promise((resolve, reject) => resolve("success"));
const promise3 = new Promise((resolve, reject) => resolve("success"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// * globalThis
console.log(globalThis); // Window {...}

// * Nullish Coalescing Operator (??)
const foo = null ?? "default";
console.log(foo); // default

// * Optional Chaining
const obj = {
    foo: {
        bar: {
            baz: "baz"
        }
    }
}
console.log(obj?.foo?.bar?.baz); // baz
console.log(obj?.foo?.baz?.length); // undefined

const user = {};

if (user?.profile?.email) {
    console.log(user.profile.email);
} else {
    console.log("No email");
}