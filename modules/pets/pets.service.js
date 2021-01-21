const Queue = require("../queue/Queue");
const store = require("../../store");

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

module.exports = {
  get() {
    let pet = {
      cat: [pets.cats.all()],
      dog: [pets.dogs.all()],
    };
    if (pet.dog[0].length < 3) {
      ("refreshing store");
      store.dogs.forEach((dog) => pets.dogs.enqueue(dog));
    }
    if (pet.cat[0].length < 3) {
      console.log("refreshing store");
      store.cats.forEach((cat) => pets.cats.enqueue(cat));
    }
    return pet;
  },
  dequeue(type) {
    if (type === "cat") {
      return pets.cats.dequeue();
    }
    if (type === "dog") {
      return pets.dogs.dequeue();
    }
  },
};
