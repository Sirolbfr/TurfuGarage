import Vehicle from './vehicle.js';

class Plane extends Vehicle {
  #manufacturer
  constructor(manufacturer,model,year) {
    super(manufacturer, model, year)
    this.#manufacturer = manufacturer;
  }

  get getDetails() {return [this.#manufacturer, this.model, this.year]}
  get manufacturer() {return this.#manufacturer}
  set manufacturer(str) {this.#manufacturer=str}
}

export default Plane;