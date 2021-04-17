var age=28;
if (age > 18){
    console.log('you are eligible to vote')
}else{
    console.log('you are not eligible to vote')
}

// -----------------------using terniary operator------------------------------
var msg=(age>18)?'you can vote':'you cant vote';
console.log(msg)

// ------------------or-------------------------------------------------------------
console.log((age > 18) ?'you can vote':'you cant vote');