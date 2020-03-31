export class Calculate {
  constructor(age) {
    this.age = age;
    this.lifeExpect = 95;
  }

  mercuryAge() {
    this.age *= 4.15;
    return this.age;
  }

  venusAge() {
    this.age *= 1.6;
    return this.age;
  }

  marsAge() {
    this.age *= 0.5;
    return this.age;
  }

  jupiterAge() {
    this.age *= 0.08;
    return this.age;
  }

  determinesLife(newAge) {
    this.newAge = newAge;
    this.lifeExpect -= this.newAge;
    if (this.lifeExpect < 0) {
      this.lostLife = Math.abs(this.lifeExpect);
      return this.lostLife;
    } else {
      return this.lifeExpect;
    }
  }
}
