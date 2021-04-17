// as we can see that the swinch statement returning all the cases value, but we want only Circle's Area.
//so we will use Break Statement
//BREAK STATEMENT:Terminates the current loop , switch, or label statement and transfers, program control to the 
// statement following the terminated statement. 
var area='circle'
var PI=3.142, l=5, b=4,r=3;
switch(area){
    case 'circle':
        console.log('The area of the circle ',PI*r**2);
        break;
    case 'triangle':
        console.log('the area of the triangle is',(l*b)/2);
        break;
    case  'rectangle':
        console.log('The area of the rectangle',l*b)
        break;
    default:
        console.log('please enter valid choice')
        
}