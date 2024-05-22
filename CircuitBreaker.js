export const CircuitBreaker = (fn, failureCount, timeThresold) => {
  let failures = 0;
  let timeSinceLastFailure = 0;
  let isClosed = false;
  return function (...args) {
    if (isClosed) {
      const diff = new Date().getTime() - timeSinceLastFailure;
      if (diff > timeThresold) {
        isClosed = false;
      } else {
        console.error("Service unavailable");
        return;
      }
    }
    try {
      const result = fn(...args);
      failures = 0;
      return result;
    } catch (error) {
      failures++;
      timeSinceLastFailure = new Date().getTime();
      if (failures >= failureCount) {
        isClosed = true;
      }
      console.log(error);
    }
  };
};

/*import { CircuitBreaker } from "./CircuitBreaker.js";

const testFunction = () => {
  let count = 0;
  return function () {
    count++;
    if (count < 8) {
      throw "failed";
    } else {
      return "hello";
    }
  };
};

const t = testFunction();
const c = CircuitBreaker(t, 7, 200);

c();
c();
c();
c();
c();
c();
c();
c();

setTimeout(() => {
  console.log(c());
}, 300);*/
