// Decorators run when we define a class
// target -> protoType ( only store methods in js & properties get store inside constructor)
// we can't get direct access to properties using decorator
// decorator get executed before we create any instance
// only argument we get to our decorator is only protoType
// we can't use a prototype to lookup a value on a instance

@classDeco
class Boat {

  @testDeco
  color: string = 'red';

  @testDeco
  get formattedColor(): string {
    return `Boat color is ${this.color}`
  }

  @logError( ' Ooops boat was sunk in ocean ')
  pilot(
    @paramDeco speed: string, 
    @paramDeco generatedWake: boolean 
  ) : void {
    if(speed == 'fast'){
      console.log("swish")
    }else{
      console.log('nothing')
    }
    // throw new Error();
  }
}

function classDeco( constructor: typeof Boat){
  console.log(' class deco: ', constructor)
}

function paramDeco( target: any, key: string, index: number) {
  console.log('params deco:', key, index)
}

function testDeco(target: any, key: string) {
  console.log("test deco Key: ", key)
}

// decorator factory
function logError (errorMessage: string){
  // decorator
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    try{
      method();
    }
    catch(e){
      console.log(errorMessage)
    }
  }
}


