// Exporting Module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}

const totalPrice = 237;
const totalQuantity = 25;

export { totalPrice as price, totalQuantity as tq };

// Default Export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}
