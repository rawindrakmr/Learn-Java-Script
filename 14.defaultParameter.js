function mult(a,b){
    return a*b
}
console.log(mult(3,4))

//Default Arguments
function mult(a,b=5){
    return a*b
}
console.log(mult(3,4))
console.log(mult(3))