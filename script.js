class Car {
  constructor(brand,model,year,colour) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.colour = colour;
  }

  get getDetails() {return [this.brand, this.model, this.year, this.colour]}
}

const NSX = new Car('Honda', 'NSX', '1990', 'red')
console.log(NSX.getDetails)