const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()]

let carMakerOne: string[][] = [];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers[1];

//Prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})


// Flexibles types
// Different types of element inside a array


const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100)

