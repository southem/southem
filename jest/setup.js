import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

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

jest.mock('react-native-device-info', () => mockRNDeviceInfo)
