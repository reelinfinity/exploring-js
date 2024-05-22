class CustomPromise {
  #thens;
  #catches;
  #finallies;
  constructor(cb) {
    this.#thens = [];
    this.#catches = [];
    this.#finallies = [];
    cb(this.resolve, this.reject);
  }
  resolve(value) {
    for (const func of this.#thens) {
      func(value);
    }
    for (const func of this.#finallies) {
      func();
    }
  }
  reject(error) {
    for (const func of this.#catches) {
      func(error);
    }
    for (const func of this.#finallies) {
      func();
    }
  }
  then(cb) {
    this.#thens.push(cb);
  }
  catch(cb) {
    this.#catches.push(cb);
  }
  finally(cb) {
    this.#finallies.push(cb);
  }
}
