// import Vehicle  from './vehicle.js';
import Car from './car.js';
import Animal from './animal.js'
import Cat from './cat.js';
import Dog from './dog.js';


const NSX = new Car('Honda', 'NSX', '1990', 'red')
console.log(NSX.getDetails)

const dflt = new Animal("test")
const Max = new Dog("Max")
Max.makeSound()
const Brownie = new Cat ("Brownie")
Brownie.makeSound()