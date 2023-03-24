//1. convert temperature create a function that converts F to Celsuis 

function getTemperature(fahrenheit) {
  const myTemperature = (fahrenheit - 32) * 5/9
  return Math.floor(myTemperature)
}
console.log(`My temp is ${getTemperature(52)}`)


//2. convert yen to USDOLLARS

function getMoneyRate(money1) {
  const myMoneyRate = 130.73 * money1
  return Math.round(myMoneyRate)
}

console.log(`Your total is ${getMoneyRate(40)}.`)