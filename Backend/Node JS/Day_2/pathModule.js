const myPath = require('path');


console.log(myPath.extname('index.css')); // returns extension of 'index.css'
console.log(myPath.extname(__filename)); // returns extension of the current file