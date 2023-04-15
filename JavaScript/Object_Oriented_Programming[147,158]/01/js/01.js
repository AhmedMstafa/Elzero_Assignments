class Car {
  constructor(name, model, price) {
    this.n = `Car One Name Is ${name}`;
    this.m = `And Model Is ${model}`;
    this.p = `And Price Is ${price}`;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 42000);
let carTwo = new Car("TG", 2017, 40000);
let carThree = new Car("LG", 2023, 50000);

console.log(carOne.n, carOne.m, carOne.p);
console.log(carOne.run());

// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"
