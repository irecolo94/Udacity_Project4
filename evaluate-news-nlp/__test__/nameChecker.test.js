import { checkForName } from "../src/client/js/nameChecker"

window.alert = jest.fn()

describe('testing the nameChecker functionality', ()=> {
  test('testing the nameChecker() function', ()=> {
    const input = "I dont like icecream";
    expect(checkForName(input)).toBeTruthy;
  });
});
