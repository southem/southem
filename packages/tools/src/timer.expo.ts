/* tslint:disable */
import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  EmitterSubscription,
  Platform,
} from 'react-native';
import EventEmitter from 'events';

// @ts-ignore
const Emitter = new EventEmitter();
let wakeLock = null;

class BackgroundTimer {
  uniqueId: number;
  callbacks: object;
  backgroundListener: EmitterSubscription;
  backgroundTimer: any;

  constructor() {
    this.uniqueId = 0;
    this.callbacks = {};

    Emitter.addListener('backgroundTimer.timeout', (id) => {
      if (this.callbacks[id]) {
        const callbackById = this.callbacks[id];
        const { callback } = callbackById;
        if (!this.callbacks[id].interval) {
          delete this.callbacks[id];
        } else {
          setTimeout(id, this.callbacks[id].timeout);
        }
        callback();
      }
    });
  }

  // Original API
  start(delay = 0) {
    if (!wakeLock) wakeLock = true;
    Emitter.emit("backgroundTimer");
    /**
    return new Promise((resolve, reject) => {
      Emitter.emit("backgroundTimer");
      resolve(delay)
    })
    **/
    // return RNBackgroundTimer.start(delay);
  }

  stop() {
    if (wakeLock) wakeLock = false;
    // return new Promise((resolve, reject) => {})
    // return RNBackgroundTimer.stop();
  }

  runBackgroundTimer(callback, delay) {
    const EventEmitter = Platform.select({
      ios: () => NativeAppEventEmitter,
      android: () => DeviceEventEmitter,
    })();
    this.start(0);
    this.backgroundListener = EventEmitter.addListener(
      'backgroundTimer',
      () => {
        this.backgroundListener.remove();
        this.backgroundClockMethod(callback, delay);
      },
    );
  }

  backgroundClockMethod(callback, delay) {
    this.backgroundTimer = this.setTimeout(() => {
      callback();
      this.backgroundClockMethod(callback, delay);
    }, delay);
  }

  stopBackgroundTimer() {
    this.stop();
    this.clearTimeout(this.backgroundTimer);
  }

  // New API, allowing for multiple timers
  setTimeout(callback, timeout) {
    this.uniqueId += 1;
    const timeoutId = this.uniqueId;
    this.callbacks[timeoutId] = {
      callback,
      interval: false,
      timeout,
    };
    setTimeout(timeoutId, timeout);
    return timeoutId;
  }

  clearTimeout(timeoutId) {
    if (this.callbacks[timeoutId]) {
      delete this.callbacks[timeoutId];
      // clearTimeout(timeoutId);
    }
  }

  setInterval(callback, timeout) {
    this.uniqueId += 1;
    const intervalId = this.uniqueId;
    this.callbacks[intervalId] = {
      callback,
      interval: true,
      timeout,
    };
    setTimeout(intervalId, timeout);
    return intervalId;
  }

  clearInterval(intervalId) {
    if (this.callbacks[intervalId]) {
      delete this.callbacks[intervalId];
      // clearTimeout(intervalId);
    }
  }
}

export const Timer = new BackgroundTimer();
