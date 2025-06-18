import Animal from './animal.js'

class Dog extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log("Woof Woof!");
  }
}

export default Dog