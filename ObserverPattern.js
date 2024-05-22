export const Move = function () {
  this.handlers = [];
  this.subscribe = function (fn) {
    this.handlers.push(fn);
  };
  this.unsubscribe = function (fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
  };
  this.fire = function (o, thisObj) {
    const scope = thisObj || window;
    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  };
};

/*import { Move } from "./ObserverPattern.js";

const moveHandler = function (item) {
  console.log("fired: " + item);
};

const moveHandler2 = function (item) {
  console.log("Moved: " + item);
};

const move = new Move();

move.subscribe(moveHandler);
move.fire("event #1");

move.unsubscribe(moveHandler);
move.fire("event #2");

move.subscribe(moveHandler);
move.subscribe(moveHandler2);
move.fire("event #3");*/
