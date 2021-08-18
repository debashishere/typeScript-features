const add = (a: number, b: number): number => {
  return a+b;
};

// no type inference for argument
// we always use type annotation for return value
const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a/b;
}

// annoromus function assign to a variable
const multiply = function(a: number, b: number): number {
  return a*b;
}

// function annotated with return type void could return null or undefined;
const logger = (message: string): void => {
  console.log(message);
}

// When we never expect a function to return ( we will never reach the end)
// we anotate with never
const throwError = (message: string): never => {
  throw new Error(message);
}


// Destructuring with annotation
const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// Destructuring  { date, weather }
// Annotation     { date: Date, weather: string}
const logWeather = ({ date, weather }:{ date: Date, weather: string}):void => {
  console.log(forecast.date);
  console.log(forecast.weather)
}

logWeather(forecast);

