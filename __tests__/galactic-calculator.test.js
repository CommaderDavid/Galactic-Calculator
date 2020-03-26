// use "debugger" to look for bugs and broken code.
import { Calculate } from "./../src/galactic.js";

describe('Calculate', () => {

  test('should find and show user inputted age', () => {
    let user = new Calculate(24);

    expect(user.age).toEqual(24);
  });
});
