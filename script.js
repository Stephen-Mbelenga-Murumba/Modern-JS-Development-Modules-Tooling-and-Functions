// Importing Module

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { addToCart, price, tq } from './shoppingCart.js';
// //
// console.log('Importing Module');
// addToCart('Bread', 5);
// console.log(price, tq);

// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCart('Bread', 10);
// console.log(shoppingCart.price, shoppingCart.tq);

//// Default Export
// import add from './shoppingCart.js';
// add('Pizza', 6);

//// Top Level Await

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// async function getLastPost() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, body: data.at(-1).body };
// }

// const lastPost = await getLastPost();
// console.log(lastPost);

//// IIFE

// // console.log(shoppingCart2);

const state = {
  cart: [
    { product: 'Banana', quantity: 5 },
    { product: 'Pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

// Parcel Hot Module Replacement

if (module.hot) {
  module.hot.accept();
}
