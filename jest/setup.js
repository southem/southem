jest.mock('react-native-background-timer', () => {
  return {
    runBackgroundTimer: jest.fn(),
    stopBackgroundTimer: jest.fn(),
    setInterval: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
    clearTimeout: jest.fn()
  };
});
