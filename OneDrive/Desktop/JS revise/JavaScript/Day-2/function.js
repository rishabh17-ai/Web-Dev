// ============================================
//       5 CUSTOM UTILITY FUNCTIONS
// ============================================


// ============================================
// 1. FLATTEN — Flatten Nested Arrays
// ============================================

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      let flatted = flatten(item);
      result.push(...flatted);
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log("========== FLATTEN ==========");
console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2, 3], [4, 5]]));
console.log(flatten([1, [2, [3, [4, [5]]]]]));


// ============================================
// 2. CHUNK — Split Array into Chunks
// ============================================

function chunk(arr, size) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    let chunkPiece = arr.slice(i, i + size);
    result.push(chunkPiece);
    i += size;
  }

  return result;
}

console.log("\n========== CHUNK ==========");
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6], 3));
console.log(chunk(["a", "b", "c", "d"], 2));


// ============================================
// 3. GROUPBY — Group Items by a Property
// ============================================

function groupBy(arr, key) {
  let result = {};

  for (let item of arr) {
    let groupName = item[key];

    if (!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(item);
  }

  return result;
}

console.log("\n========== GROUPBY ==========");
const users = [
  { name: "Rahul", city: "Delhi",   role: "Admin" },
  { name: "Priya", city: "Mumbai",  role: "User"  },
  { name: "Amit",  city: "Delhi",   role: "User"  },
  { name: "Neha",  city: "Mumbai",  role: "Admin" },
  { name: "Ravi",  city: "Chennai", role: "User"  }
];

console.log("Grouped by city:");
console.log(groupBy(users, "city"));
console.log("Grouped by role:");
console.log(groupBy(users, "role"));


// ============================================
// 4. DEEPCLONE — Deep Copy an Object
// ============================================

function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    let arrCopy = [];
    for (let item of value) {
      arrCopy.push(deepClone(item));
    }
    return arrCopy;
  }

  let objCopy = {};
  for (let key in value) {
    objCopy[key] = deepClone(value[key]);
  }
  return objCopy;
}

console.log("\n========== DEEPCLONE ==========");
const original = {
  name: "Rahul",
  scores: [85, 90, 95],
  address: {
    city: "Delhi",
    pincode: { code: 110001 }
  }
};

const cloned = deepClone(original);
cloned.name = "Amit";
cloned.scores.push(100);
cloned.address.city = "Mumbai";

console.log("Original:", original);
console.log("Cloned:  ", cloned);


// ============================================
// 5. MEMOIZE — Cache Function Results
// ============================================

function memoize(fn) {
  let cache = {};

  return function(...args) {
    let key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log("From cache ⚡ :", key);
      return cache[key];
    }

    console.log("Calculating... :", key);
    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

console.log("\n========== MEMOIZE ==========");
const fastAdd = memoize((a, b) => a + b);

console.log(fastAdd(2, 3));
console.log(fastAdd(2, 3));
console.log(fastAdd(4, 5));
console.log(fastAdd(4, 5));

console.log("\n--- Memoized Fibonacci ---");
const fastFib = memoize(function(n) {
  if (n <= 1) return n;
  return fastFib(n - 1) + fastFib(n - 2);
});

console.log("fib(10):", fastFib(10));
console.log("fib(20):", fastFib(20));
console.log("fib(40):", fastFib(40));