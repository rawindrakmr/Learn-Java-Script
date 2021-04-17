var area='circle'
var PI=3.142, l=5, b=4,r=3;
switch(area){
    case 'circle':
        console.log('The area of the circle ',PI*r**2);
    case 'triangle':
        console.log('the area of the triangle is',(l*b)/2);
    case  'rectangle':
        console.log('The area of the rectangle',l*b)
    default:
        console.log('please enter valid choice')
}