export class Calculate {
  constructor(age) {
    this.age = age;
    this.lifeExpect = 95;
  }

  mercuryAge() {
    this.age *= .24;
    return this.age;
  }

  venusAge() {
    this.age *= .62;
    return this.age;
  }

  marsAge() {
    this.age *= 1.88;
    return this.age;
  }

  jupiterAge() {
    this.age *= 11.86;
    return this.age;
  }

  determinesLife(newAge) {
    this.newAge = newAge;
    this.lifeExpect -= this.newAge;
    if (this.lifeExpect < 0) {
      console.log("you past...");
      return this.lifeExpect;
    } else {
      console.log("you have...");
      return this.lifeExpect;
    }
  }
}
