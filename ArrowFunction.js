/* Simple Function Syntax 1 */
function sayHello(name) {
   console.log('Hello, ' + name);
}
/* Arrow Function Syntax 1 */
const sayHello = (name) => { console.log('Hello, ' + name) };
sayHello('Hand Written Code');


/* Simple Function Syntax 2 */
function sayHello(name) {
   return 'Hello, ' + name;
}
/* Arrow Function Syntax 2 */
const sayHello = name => 'Hello, ' + name;
console.log(sayHello('Hand Written Code'));