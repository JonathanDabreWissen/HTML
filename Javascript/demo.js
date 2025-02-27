var a = 10
var b = "10"

console.log("a==b: " + (a==b))
console.log("a===b: " + (a===b))

var arr = [11, "hi", new Date(), 3.4, false]

for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-------------")
for(let x in arr){
    console.log(x + " : " + arr[x]);
}
console.log("-------------")

for(let x of arr){
    console.log(x);
}
console.log("-------------")

