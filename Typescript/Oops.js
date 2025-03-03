"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clerk = void 0;
var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    };
    return Emp;
}());
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(name, age, salary, designation) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.designation = designation;
        return _this;
    }
    Clerk.prototype.displayAll = function () {
        _super.prototype.display.call(this);
        console.log("Salary: " + this.salary);
        console.log("Designation: " + this.designation);
    };
    return Clerk;
}(Emp));
exports.Clerk = Clerk;
var e1 = new Emp("Raju", 25);
var c1 = new Clerk("Suman", 25, 55000, "Programmer");
e1.display();
c1.display();
var A = /** @class */ (function () {
    function A() {
        console.log("A()");
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        console.log("B()");
        return _this;
    }
    return B;
}(A));
var a1 = new B();
console.log("----------------------------------------");
var Hatchback = /** @class */ (function () {
    function Hatchback() {
        this.speed = 0;
    }
    Hatchback.prototype.accelerate = function () {
        console.log("Accelerator: " + ++this.speed);
    };
    Hatchback.prototype.brake = function () {
        console.log("Deccelerator: " + --this.speed);
    };
    return Hatchback;
}());
var h1 = new Hatchback();
h1.accelerate();
h1.accelerate();
h1.accelerate();
h1.brake();
var m1 = { "company": "Maruti", "model": "Brezza", "price": 1825000, "gear": true };
var m2 = { "company": "Tata", "model": "Nexon", "price": 1825000 };
var m3 = { "company": "M&M", "model": "BE6", "price": 2315000 };
console.log(m1);
console.log(m2);
console.log(m3);
console.log("----------------------------------------");
var arr1 = ["Hi", "Hello", "How are you", "Thanks", "Bye"];
var arr2 = ["Hi", "Hello", "How are you", "Thanks", "Bye"];
arr1.push("Just for demo");
console.log(arr1);
console.log(arr2);
