class Lanternfish {
  constructor (timer = 8) {
    this.timer = timer;
  }

  age () {
    if (this.timer === 0) {
      this.timer = 6;

      return new Lanternfish();
    } else {
      this.timer--;
    }
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this._next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addLast (value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const tail = this.tail;

      tail._next = node;

      this.tail = node;
    }

    this.length++;

    return this;
  }

  merge (list) {
    if (list.length) {
      this.tail._next = list.head;
      this.tail = list.tail;
      this.length += list.length;
    }
  }
}

module.exports = (input) => {
  const fish = input
    .split(',')
    .reduce((list, f) => list.addLast(new Lanternfish(+f)), new LinkedList());

  let day = 1;

  while (day++ <= 80) {
    const addedFish = new LinkedList();

    let currentFish = fish.head;

    do {
      const newFish = currentFish.value.age();

      if (newFish) {
        addedFish.addLast(newFish);
      }
    } while (currentFish !== null, currentFish = currentFish._next);

    fish.merge(addedFish);
  }

  return fish.length;
};
