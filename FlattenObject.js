const FlattenObject = (obj) => {
  let result = {};
  for (const i in obj) {
    if (typeof obj[i] === "object") {
      const temp = FlattenObject(obj[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

export default FlattenObject;

// import FlattenObject from "./FlattenObject.js";

// const obj = {
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//   },
// };

// console.log(FlattenObject(obj), FlattenObject.toString());
