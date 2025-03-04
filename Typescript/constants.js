var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.company = "Wissen";
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Company: ".concat(this.company));
    };
    return Emp;
}());
var e1 = new Emp("Raju", 25);
e1.display();
e1.company = "Morgan";
e1.display();
