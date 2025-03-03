class Emp{
    private name:string;
    private age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;

    }

    display(){
        console.log("Name: " +this.name);
        console.log("Age: " +this.age);
    }
}

export class Clerk extends Emp{
    salary:number;
    designation:string;

    public constructor(name:string, age:number, salary:number, designation:string){

        super(name, age);
        this.salary=salary;
        this.designation = designation;

    }
    public displayAll(){

        super.display();

        console.log("Salary: " +this.salary);
        console.log("Designation: " +this.designation);

    }
}

var e1 = new Emp("Raju", 25);
var c1 = new Clerk("Suman", 25, 55000, "Programmer");
e1.display()
c1.display()


class A{
    constructor(){
        console.log("A()");
    }
}

class B extends A{
    constructor(){
        super();
        console.log("B()");
    }
}

var a1 = new B()

console.log("----------------------------------------");

interface Car{
    speed:number;
    accelerate(): void;
    brake(): void;
}

class Hatchback implements Car{
    speed: number = 0;
    
    
    accelerate(): void {
        console.log("Accelerator: " + ++this.speed);
    }
    
    brake(): void {
        console.log("Deccelerator: " + --this.speed);
    }
}

let h1 = new Hatchback();
h1.accelerate();
h1.accelerate();
h1.accelerate();

h1.brake();

interface CarProperties{
    company: string;
    model: string;
    price: number;
    gear?:boolean;
}

let m1:CarProperties = {"company": "Maruti",  "model":"Brezza", "price":1825000, "gear":true};
let m2:CarProperties = {"company": "Tata",  "model":"Nexon", "price":1825000};
let m3:CarProperties = {"company": "M&M",  "model":"BE6", "price":2315000};

console.log(m1);
console.log(m2);
console.log(m3);
console.log("----------------------------------------");


let arr1:string[]= ["Hi", "Hello","How are you", "Thanks", "Bye"];
let arr2:Array<String> = ["Hi", "Hello", "How are you", "Thanks", "Bye"];

arr1.push("Just for demo");

console.log(arr1);
console.log(arr2);

console.log("----------------------------------------");

var a = 10;
var b = 20;

console.log("The sum of " +a +" and " +b +" is " +(a+b) );
console.log(`The sum of ${a} and ${b} is ${a+b}`);