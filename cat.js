import Animal from './animal.js'

class Cat extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log(this.name + " : Meow Meow");
  }
}

export default Cat