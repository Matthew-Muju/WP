//function declaration
//function hello(){
//    console.log('Hello Matthew'); 
//}
//hello();

//function expression
let greeting = function(name){
    return `hello ${name}`;
}
console.log(greeting('Matthew'));

//IIFE
const squared = (function(num){
    return num * num;
})(9);

console.log(squared);

//arrow function
const hello = (fname, lname) => `hello ${fname} ${lname}`;

console.log(hello('Matthew','Muju'));

const fct = (number) => {
    if (number <= 1){
        return 1;
    } else {
        return number * fct(number - 1);
    }
}
console.log(fct(9));