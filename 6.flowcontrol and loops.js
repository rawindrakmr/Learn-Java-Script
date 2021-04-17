// 1.)if else statement -----------------------------------------------
var tommr='rain'
if (tommr=='rain'){
    console.log('Take an umberella')
}else{
    console.log('no need to take umberella')
}
//2.)write a program that works out whether is a given year is a leap year or not?
var year=2020;
if(year%4 ===0){
    if(year%100===0){
        if(year%400===0){
            console.log('the year '+year+" is a leap year")
        }else{
            console.log('the Year '+year+' is not a leap year')
        }
    }else{
        console.log('The Year '+year+" is leap year")
    }

}else{
    console.log('the year '+year+" is not leap year")
}