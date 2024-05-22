export const Singleton = (function () {
  let instance;
  function createInstance() {
    const object = new Object({
      name: "Pankaj",
      age: 24,
    });
    return object;
  }
  return {
    getInstance: function() {
        if(!instance) {
            instance = createInstance();
        }
        return instance;
    }
  }
})();

// import { Singleton } from "./Singleton.js";

// const object1 = Singleton.getInstance();
// const object2 = Singleton.getInstance();

// console.log(object1 === object2, "object1 === object2", Object.is(object1, object2))
