/*
function add(a, b){
    console.log(a+b)
}
function add(a, b, c){
    console.log(a+b+c)
}
*/

function add(...a){ // Rest Parameter
    var res = 0;
    for(var i = 0; i<a.length; i++){
        res = res + a[i];
    }
    console.log("Result: " +res);
}

add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);
add()

console.log("---------------------------")
var emp = ["Rajesh", 32, 80000, "Programmer"]

function display(name, age, salary, desig){
    console.log("Name : " +name);
    console.log("Age : " +age);
    console.log("Salary : " +salary);
    console.log("Designation : " +desig);
}

// display(emp)
display(...emp)