let hello = () =>{
    return "hello world";
}
console.log(hello())

//
let sum=(a,b) => {
    return(a+b)
}
console.log(sum(3,4))

//
let arrowfunction = () => {
    console.log('This is an arrow function example');
}
arrowfunction();

//
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//
var x = 21;
a();
b();
function a() {
    x = 20;
    console.log(x);
};
function b() {
    x = 40;
    console.log(x);
};

// 
console.log("This is for factorial: ");
fact = 0 ;
function Factorial (n){
    if (n === 1){
        fact =  1;
    }
    else {

        fact = n ;

      
        for ( let i = n ; i >1 ; i--){
             fact = fact * (i-1);
        }
    }
    return fact;
}
console.log(Factorial(5));