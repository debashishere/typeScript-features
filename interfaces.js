// Vehicle refers to a type
// we declear new type with interface
// interface Vehicle {
// name: string;
// year: Date;
// broken: boolean;
// value is the return type of the fuction
//   summary(): string
// }
// in order to oldCivic to be a vehicle
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    // function inside a object
    summary: function () {
        return "Name " + this.name;
    }
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
