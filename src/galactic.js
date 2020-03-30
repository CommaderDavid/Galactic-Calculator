export class Calculate {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    this.age /= .24;
    return this.age;
  }

  venusAge() {
    this.age /= .62;
    return this.age;
  }

  marsAge() {
    this.age /= 1.88;
    return this.age;
  }
}
