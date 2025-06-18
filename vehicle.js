class Vehicle {
  #brand
  #model
  #year
  constructor(brand,model,year) {
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }
  get brand() {return this.#brand}
  set brand(str) {this.#brand=str}
  get model() {return this.#model}
  set model(str) {this.#model=str}
  get year() {return this.#year}
  set year(int) {this.#year=int}
}

export default Vehicle