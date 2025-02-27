function add(a, b){
    console.log("Addition: " + (a+b)); 
}


var sum = add;


//Self invoking function
var selfInvokingExample = function(a, b){
    console.log("Subtract : " + (a-b));
}(12, 13)

var sub = function(a, b){
    console.log("Subtract : " + (a-b));
}

//Arrow function
var mul = (a, b) => console.log("Multiply: " +(a*b));

//
var div = new Function("a", "b", "console.log('Division: ' +(a/b))");


add(10, 20);
sum(10, 20);
sub(8, 6);
mul(20, 30);
div(50, 10);

console.log(typeof(add))
console.log(typeof(sum))
console.log(typeof(sub))
console.log(typeof(mul))
console.log(typeof(div))

