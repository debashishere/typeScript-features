
// defination what a vehicle should be
class Vehicle{

  constructor(public color: string) {}

  protected honk(): void{
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

// extends -> Take all the method of Vehicle and copy them over car.
class Car extends Vehicle{
  constructor(public wheels: number, color: string){
    // parent class const call
    super(color);
  }
   private drive(): void{
    console.log('vroom');
  }

  startDrivingProcess(): void{
    this.drive();
    this.honk();
  }
}


// instantiate
const car = new Car(4, 'blue');
car.startDrivingProcess();
