// let fifteen = Promise.resolve(15);
// fifteen
//   .then(value => console.log(`got ${value}`))
//   .then(val => console.log(val));

// // function storage(nest, name) {
// //   return new Promise(resolve => {
// //     nest.readStorage(name, result => resolve(result));
// //   });
// // }

// // storage(bigOak, 'enemies').then(value => console.log(`got R${value}`));

// // new Promise((_, reject) => reject(new Error('fail')))
// //   .then(value => console.log('Handler 1' + value))
// //   .catch(reason => {
// //     console.log('Caught failure ' + reason);
// //     return 'nothing';
// //   })
// //   .then(value => console.log('Handler 2', value))
// //   .finally(() => console.log('I love you'));

// const arr = ['a', 'b', 'c', 'd'];
// const obj = {
//   js: 'ad',
//   type: 'oni',
// };
// for (const letter of arr) {
//   console.log(letter + ' old');
// }

// arr[Symbol.iterator] = function () {
//   let i = 0;
//   console.log(this);
//   let arr = this;
//   return {
//     next: function () {
//       if (i >= arr.length) {
//         return { done: true };
//       } else {
//         const value = arr[i];
//         i++;
//         return { value, done: false };
//       }
//     },
//   };
// };
// for (const letter of arr) {
//   console.log(letter + 'new');
// }

const mil = 10000;
const arr = Array(mil);

console.time('a');

for (let i = 0; i < arr.length; i++) {}

console.timeEnd('e');
