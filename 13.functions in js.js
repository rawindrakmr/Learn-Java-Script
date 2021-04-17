//adding two numbers
function addNumbs(){
    var a=10
    var b=10
    console.log('addition is ',a+b)
}
addNumbs()

//function with arguments
function addSum(a,b){
    console.log('The sum is ',a+b)
}
addSum()
addSum(10,12)
addSum(12,15)
var sum=addSum(30,50)
sum;

//----------------anonymous function and expression----------
var funExp=function (a,b){
    return total=a+b;
}
//here funExp=function Expression, and rest part is anonymous function.
console.log(funExp(13,15))
var sum1=funExp(30,89)

console.log(funExp(30,89))