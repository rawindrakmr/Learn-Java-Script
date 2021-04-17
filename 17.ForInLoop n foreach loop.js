//we use for loop to nevigate
var myFriend=['vinod','ramesh','arjun','vishal']
//using for loop
for(var i=0;i<myFriend.length;i++){
    console.log(myFriend[i])
}

//using for in loop
for (let elements in myFriend){
    console.log(myFriend[elements])
}


//using for of loop in js
for(let element of myFriend){
    console.log(element)
}