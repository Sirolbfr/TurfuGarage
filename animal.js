class Animal {
  #name
  constructor (name) {
    this.#name= name;
  }

  makeSound() {
    console.log("Generic Animal Noise");
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log("Woof Woof!");
  }
}

class Cat extends Animal {
  constructor (name) {
    super(name)
  }

  makeSound() {
    console.log("Meow Meow");
  }
}

const Default = new Animal("Default")
const Max = new Dog("Max")
Max.makeSound()
const Brownie = new Cat ("Brownie")
Brownie.makeSound()