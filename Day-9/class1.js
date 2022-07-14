var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.disp = function () {
        console.log("Engine is  :   " + this.name);
    };
    return Person;
}());
