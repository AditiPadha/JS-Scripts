const name = "aditi"
const count = 50
console.log(`My name is ${name} and the repo count is ${count}`);
const myName = new String ("aditi")
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(3))
console.log(myName.indexOf('t'))

const balance = new Number(100.3456)
console.log(balance)
console.log(balance.toString())
console.log(typeof balance)
console.log(balance.toFixed(2))
console.log(balance.toPrecision(5))
const hundreds = new Number (10000000)
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toLocaleString())

//*****************Maths********************* *
console.log(Math.abs(-5))
console.log(Math.round(4.543))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.9))
console.log(Math.min(3,6,1,6,9))
console.log(Math.max(3,6,1,6,9))
console.log(Math.random())
const min = 10
const max = 20

console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * (max-min + 1) + min))



