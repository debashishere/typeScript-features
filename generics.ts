

// **************************************Generics with Classes**************************

class ArrayOfNumbers {
  constructor( public collection: number[]){}

  get(index: number): number {
    return this.collection[index]
  }
}


class ArrayOfString {
  constructor(public collection: string[]){}

  get(index: number): string {
    return this.collection[index];
  }
}

// generic class
class ArrayOfAnything<TypeInThisClass> {
  constructor( public collection: TypeInThisClass[]){}

  get(index: number): TypeInThisClass {
    return this.collection[index];
  }
}

// type inference
const arr = new ArrayOfAnything([ 'a', 'b', 'c'])



// *********************Generics with functions***********************

function printStrings( arr: string[]): void {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}


function printNumbers( arr: number[]): void {
  for(let i = 0; i < arr.length; i++)
  {
    console.log(arr[i])
  }
}

// generic function
function printAnything<TypeOfArray>(arr: TypeOfArray[]): void {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}

// function call
// printAnything<string>([ 'a', 'b', 'c' ])

// type inference
printAnything([ 'a', 'b', 'c' ]);


// ******************************Generic Constraints*****************************
// constraints -> a promise

class Car {
  print(){
    console.log('I am a Car')
  }
}

class House {
  print(){
    console.log('Im am a house');
  }
}

interface Printable {
  print(): void;
}

// T extends Printable => what ever type T is, 
// T gona have all the properties of interface Printable 
function printHousesOrCars<T extends Printable>(arr: T[]): void{
  for( let i =0; i < arr.length; i++){
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car(), new Car()])