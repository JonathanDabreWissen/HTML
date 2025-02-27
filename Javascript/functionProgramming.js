//First class member
var a = 10;
console.log(a);
a = function(){
    console.log("Hello");
}

console.log(a)
a()


console.log("------------------------------");

function abc(){
    console.log("From function abc()")
}
function xyz(){
    console.log("From function xyz()")
    return abc;
}
function demo1(op){
    console.log("From function demo1()>>>>")
}
function demo2(){
    console.log("From function demo2() >>>>>");
    return xyz;
}

demo1(abc);
demo1(xyz);

console.log("-------------------------")
var res = demo2();
res();
console.log("-------------------------")

demo2()
demo2()()
demo2()()()

console.log("-------------------------")
console.log(Math.PI)
console.log(Math.E)
console.log(Math.sqrt(25))
console.log(Math.pow(3, 6))


console.log("-------------------------")

var d1 = new Date()
console.log(d1)
d1.setMonth(15)
console.log(d1)

console.log("-------------------------")

var s1 = new String("Hello Everybody");
console.log(s1)
console.log(s1.toUpperCase())
console.log(s1.toLowerCase())

console.log("-------------------------")

var n1 = new Number("1234")
console.log(n1)

console.log("-------------------------")

console.log("false")
console.log(new Boolean(""))
console.log(new Boolean(0))
console.log(new Boolean(NaN))
console.log(new Boolean(null))
console.log(new Boolean(-1))

