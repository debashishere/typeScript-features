
// Vehicle refers to a type
// we declear new type with interface
// interface Vehicle {
  // name: string;
  // year: Date;
  // broken: boolean;
  // value is the return type of the fuction
//   summary(): string
// }


// to call this function u must provide a object
// that meets specification provided by Vehicle interface
// const printVehicle = (vehicle: Reportable): void => {
//   console.log(vehicle.summary())
// }   

// oldCivic satisfies specifications of Vehicle
// printVehicle(oldCivic);

// generic interface 
interface Reportable {
  summary(): string
}

// in order to oldCivic to be a vehicle
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  // function inside a object
  summary() : string {
    return `Name ${this.name}`
  }

};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// This is a generic function
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
  }   

printSummary(oldCivic);
printSummary(drink);