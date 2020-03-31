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
    let u = userAge.toFixed(2);
    expect(u).toEqual("103.75");
  });

  test('should calculate users age by venus solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.venusAge();
    expect(userAge).toEqual(40);
  });

  test('should calculate users age by mars solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.marsAge();
    let u = userAge.toFixed(1);
    expect(u).toEqual("12.5");
  });

  test('should calculate users age by jupiters solar cycle', () => {
    let user = new Calculate(25);
    let userAge = user.jupiterAge();
    expect(userAge).toEqual(2);
  });

  test('should test to see how long user has left to live', () => {
    let user = new Calculate(25);
    let userAge = user.marsAge();
    let lifeLeft = user.determinesLife(userAge);
    expect(lifeLeft).toEqual(82.5);
  });

  test('should show how many years user is over expected life', () => {
    let user = new Calculate(25);
    let userAge = user.mercuryAge();
    let lifeLeft = user.determinesLife(userAge);
    let u = lifeLeft.toFixed(2);
    expect(u).toEqual("8.75");
  });
});
