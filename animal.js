class Animal {
  #name
  constructor (name) {
    this.#name= name;
  }

  get name() {return this.#name}
  set name(str) {this.#name = str}

  makeSound() {
    console.log("Generic Animal Noise");
  }
}

export default Animal