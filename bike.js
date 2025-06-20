import Vehicle from './vehicle.js';

class Motorbike extends Vehicle {
  #colour
  #displacement
  constructor(brand='Suzuki',model='Hayabusa',year=1999,colour='black',displacement=1340) {
    super(brand, model, year)
    this.#colour = colour;
    this.#displacement = displacement
  }

  get getDetails() {return [this.brand, this.model, this.year, this.#colour, this.#displacement]}
  get colour() {return this.#colour}
  set colour(str) {this.#colour=str}
  get displacement() {return this.#displacement}
  set displacement(int) {this.#displacement=int} //cm**3
}

export default Motorbike;