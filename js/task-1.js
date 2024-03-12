function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); //"Ви замовили 5 дроїдів вартістю 15000 кредитів!" ;
console.log(makeTransaction(3, 1000)); //"Ви замовили 3 дроїди вартістю 3000 кредитів!" ;
console.log(makeTransaction(10, 500)); //"Ви замовили 10 дроїдів вартістю 5000 кредитів!" ;
