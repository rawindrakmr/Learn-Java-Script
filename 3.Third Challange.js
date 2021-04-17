console.log(NaN===NaN) //false
console.log(NaN==NaN) //false
console.log(Number.NaN===NaN) //false
// (we get false, bcz NaN is neither a data type nor a Value, it  is a property of global  object) 

// ---------------------------------------------------------------------------------------------------------
console.log(isNaN(NaN))//true
console.log(Number.isNaN(NaN)) //true
console.log(isNaN(Number.NaN))//true