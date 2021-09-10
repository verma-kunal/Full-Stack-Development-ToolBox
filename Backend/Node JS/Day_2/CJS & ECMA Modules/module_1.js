// here 'myFun' will be used as an alias to call the 'simple()' from 'module_2.js'.
// const myFun = require('./module_2');

// myFun();


// The above method of import is called "Common Js Modules" (as module_2 was imported as JS module)

// ECMA Module system:

// import {simple, simple2} from './module_3.mjs';
// import {simple as func} from './module_3.mjs';

// func(); // 'func' acts as an alias for simple2()'


import * as allFunc from './module_3.mjs';

console.log(allFunc);
console.log(allFunc.simple()); // to use whats inside the above export



