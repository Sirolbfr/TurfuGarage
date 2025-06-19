import Car from './car.js';
import Motorbike from './bike.js';
import Plane from './plane.js';
import Animal from './animal.js'
import Cat from './cat.js';
import Dog from './dog.js';


const NSX = new Car('Honda', 'NSX', 1990, 'red')
console.log(NSX.getDetails)
const S1000RR = new Motorbike('BMW','S1000RR',2009,'white',998)
console.log(S1000RR.getDetails)
const Spitfire = new Plane('Supermarine','Spitfire',1938)
console.log(Spitfire.getDetails);

const dflt = new Animal("test")
dflt.makeSound()
const Max = new Dog("Max")
Max.makeSound()
const Brownie = new Cat ("Brownie")
Brownie.makeSound()