import Animal from './animal.js'

class Dog extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log(this.name + " : Woof Woof!");
  }
}

export default Dog