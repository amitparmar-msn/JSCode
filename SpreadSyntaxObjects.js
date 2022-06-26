const obj1 = { a: 1, b: 3, c: 'String' };
const obj2 = { e: 'String again', f: 10 };

const combinedObject = { ...obj1, obj2 };
console.log(combinedObject);