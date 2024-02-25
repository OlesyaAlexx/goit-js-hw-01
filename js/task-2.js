function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

let country = 'Australia';
let price = 120;
let deliveryFee = 50;
console.log(getShippingMessage('Australia', 120, 50));

getShippingMessage('Australia', 120, 50); // "Shipping to Australia will cost 170 credits" ;
getShippingMessage('Germany', 80, 20); // "Shipping to Germany will cost 100 credits" ;
getShippingMessage('Sweden', 100, 20); // "Shipping to Sweden will cost 120 credits" ;

console.log(getShippingMessage('Австралія', 120, 50)); // "Доставка до Австралії коштуватиме 170 кредитів"
console.log(getShippingMessage('Німеччина', 80, 20)); // "Доставка до Німеччини коштуватиме 100 кредитів"
console.log(getShippingMessage('Швеція', 100, 20)); // "Доставка до Швеції коштуватиме 120 кредитів"
