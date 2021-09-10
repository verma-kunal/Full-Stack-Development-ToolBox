import url from 'url';

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e'; // GET params
myURL.hash = '#fgh'; // particular section of a page

console.log(myURL);
console.log(myURL.href); // the whole above URL would collectively look like this

