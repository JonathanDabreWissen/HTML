let emp1 = {
    "name": "Prakash",
    "age" : 35,
    "salary": 6000,
    "designation": "Programmer"
}

let emp2 = [
    "Prakash",
    35,
    6000,
    "Programmer"
]

// let {name, age, salary, designation="Tester" }= emp1;
let {name, age, salary, designation="Tester" }= emp1;
let [a_name, a_age, a_salary, a_designation="Tester" ]= emp2;



console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Salary: ${salary}`);
console.log(`Designation: ${designation}`);


console.log(`Name: ${a_name}`);
console.log(`Age: ${a_age}`);
console.log(`Salary: ${a_salary}`);
console.log(`Designation: ${a_designation}`);