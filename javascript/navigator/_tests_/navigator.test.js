const Navigator = require('../index');

describe('Navigator', () => {
  let navigator;

  beforeEach(() => {
    navigator = new Navigator();
  });

  it('should navigate to a new location', () => {
    navigator.go('url1');
    expect(navigator.back()).toBe(null);
    expect(navigator.forward()).toBe(null);
  });

  it('should navigate back to the previous location', () => {
    navigator.go('url1');
    navigator.go('url2');
    expect(navigator.back()).toBe('url1');
    expect(navigator.forward()).toBe('url2');
  });

  it('should navigate forward to the next location', () => {
    navigator.go('url1');
    navigator.go('url2');
    navigator.back();
    expect(navigator.forward()).toBe('url2');
  });

  it('should replace forward history when navigating to a new location after going back', () => {
    navigator.go('url1');
    navigator.go('url2');
    navigator.go('url3');
    navigator.back();
    navigator.go('url4');
    expect(navigator.back()).toBe('url2');
    expect(navigator.forward()).toBe('url4');
  });
});
