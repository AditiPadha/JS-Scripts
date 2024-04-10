const mySum = Symbol("key1")
const jsuser = {
    name : "Aditi",
    age : 18,
    [mySum]: "keyone",
    email : "aditi@gmail.com",
    isLogged : false,
    loggedIndays: ["Monday","Wednesday"]
}

console.log(jsuser.name)
console.log(jsuser["email"])
console.log(jsuser[mySum])
jsuser.email = "aditi.google.com"
console.log(jsuser["email"])
// Object.freeze(jsuser)
// jsuser.email = "aditi@chatgpt.com"
// console.log(jsuser["email"])
jsuser.greeting = function()
{
    console.log("this is a new function")
}
console.log(jsuser.greeting())
jsuser.greetingTwo = function()
{
    console.log(`This is a username ${this.name}`)
}
console.log(jsuser.greetingTwo())
