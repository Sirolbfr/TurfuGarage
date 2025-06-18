import Animal from './animal.js'

class Cat extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log("Meow Meow");
  }
}

export default Cat