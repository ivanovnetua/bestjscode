
class Animal {
  constructor(name = 'Some dog') {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  bark() {
    return `Dog ${this.name} is barking`;
  }
}


var dog = new Dog ('Aban');

console.log(dog.getName() === 'Aban'); //true
console.log(dog.bark() === 'Dog Aban is barking');//true