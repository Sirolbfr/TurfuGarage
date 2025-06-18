class Animal {
  #name
  constructor (name) {
    this.#name= name;
  }

  makeSound() {
    console.log("Generic Animal Noise");
  }
}

export default Animal