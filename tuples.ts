const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number]


// order of items is important
// this is a tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40

const pepsi: Drink = ['brown', true, 40];
const spirit: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuple are hard to understand
// we don't have any info about the data
const carSpecs: [number, number] = [400, 3354]

// in objects we can add keys which gives us more info about out data
const carState = {
  horsepower: 400,
  weight: 3354
}