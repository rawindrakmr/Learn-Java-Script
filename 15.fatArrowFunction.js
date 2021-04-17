//Normal Function
function sum(){
    var a=5; var b=7;
    let sum=a+b;
    return `the sum is ${sum}`
}
console.log(sum())

//-------using fat arrow function-----------------------------------------------------
const sum1 = () =>{
    var a=5; var b=7;
    let sum=a+b;
    return `the sum is ${sum}`
}
console.log('this is from arrow function',sum1())
//if we want only one line expression inside the arrow function, we dont need to to write return keyword
//eg.
const sum2=() => `the sum is ${(a=5)+(b=6)}`
console.log(sum2())