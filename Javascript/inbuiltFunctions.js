var a = 10;
console.log(typeof(a))
console.log(isNaN(a))

var b = "2010.95"

console.log(parseInt(b) + 5)
console.log(parseFloat(b) + 5);
var c = "3 + 5 - 8 * 2 / 2"
console.log(eval(c))
var d = "2010.95ABC"
console.log(parseInt(d) + 5)

var i = 1
function abc(){
    console.log("Hello : " + i++);
    
}

function stop(){
    clearInterval(ref);
}

var ref = setInterval(abc, 1000);
setTimeout(stop, 15000);

console.log("I can't wait for any other function to complete");
