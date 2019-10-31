/**
 * Our tests use Jasmine.
 */

describe('RNDeviceFarm Device Test', () => {
  it('Should have welcome text', () => {
    // We need to wait for the component to be visible.
    // The ~ is how we select on testId
    $('~welcomeText').waitForDisplayed(3000);
    const element = $('~welcomeText');
    expect(element.getText()).toBe('Tink Link Demo');
  });
  //TODO: Using enzyme or react-testing-library to Test Components in React Native
});
