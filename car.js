import Vehicle from './vehicle.js';

class Car extends Vehicle {
  #colour
  constructor(brand,model,year,colour) {
    super(brand, model, year)
    this.#colour = colour;
  }

  get getDetails() {return [this.brand, this.model, this.year, this.#colour]}
  get colour() {return this.#colour}
  set colour(str) {this.#colour=str}
}

export default Car;