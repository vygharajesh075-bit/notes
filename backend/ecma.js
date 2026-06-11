// export const a=2
// export const b=4
// export const c=5
// const obj={
//     x:5, 
//     y:7

// }
// export default obj;
// module.exports={
//     a:1,
//     b:4
// }
// File 1: data.js
// module.exports = {
//     a: 1,
//     b: 4
// };

// Here you're saying:

// "Export this object so other files can use it."

// File 2: server.js
// const data = require("./data");

// console.log(data);

// Output:

// { a: 1, b: 4 }

// You can also access individual properties:

// console.log(data.a);
// console.log(data.b);

// Output:

// 1
// 4
// How require() works

// When Node sees:

// const data = require("./data");

// it:

// Opens data.js
// Looks at module.exports
// Returns whatever is assigned to module.exports

// So:

// module.exports = {
//     a: 1,
//     b: 4
// };

// becomes:

// const data = {
//     a: 1,
//     b: 4
// };
// File 1: data.js
// module.exports = {
//     a: 1,
//     b: 4
// };

// Here you're saying:

// "Export this object so other files can use it."

// File 2: server.js
// const data = require("./data");

// console.log(data);

// Output:

// { a: 1, b: 4 }

// You can also access individual properties:

// console.log(data.a);
// console.log(data.b);

// Output:

// 1
// 4
// How require() works

// When Node sees:

// const data = require("./data");

// it:

// Opens data.js
// Looks at module.exports
// Returns whatever is assigned to module.exports

// So:

// module.exports = {
//     a: 1,
//     b: 4
// };

// becomes:

// const data = {
//     a: 1,
//     b: 4
// };