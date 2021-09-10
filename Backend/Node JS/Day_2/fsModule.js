const myFs = require('fs');

 // readFile callback(=>) function:
// myFs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log(err, data);
// })

// const a = myFs.readFileSync('file.txt');
// console.log(a.toString()); // 'toString()' is important

// myFs.writeFile('file2.txt', "This is my file2", ()=>{

//     console.log("Data has been written"); 
//     // run this when data has been written in 'file2.txt'
// });

const a2 = myFs.writeFileSync('file2.txt', "This is my file 2");
// will return 'undefined', but that means it has done the work!!

console.log(a2);
console.log("Finished reading the file !");

