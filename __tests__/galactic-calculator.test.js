// use "debugger" to look for bugs and broken code.
import { Calculate } from "./../src/galactic.js";

describe('Calculate', () => {

  test('should find and show user inputted age', () => {
    let user = new Calculate(24);
    expect(user.age).toEqual(24);
  });

  test('should calculate users age by mercurys solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.mercuryAge();
    expect(userAge).toEqual(6);
  });

  test('should calculate users age by venus solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.venusAge();
    let u = userAge.toFixed(1);
    expect(u).toEqual("15.5");
  });

  test('should calculate users age by mars solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.marsAge();
    expect(userAge).toEqual(47);
  });
});
