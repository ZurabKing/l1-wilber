const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

const stringifyPrimitive = (value) => {
  if (typeof value === "string") {
    return `"${value}"`;
  }

  return `${value}`;
};

const stringifyObj = (obj) => {
  let res = [];

  for (const key in obj) {
    let current = "";
    current += `"${key}":`;

    const value = obj[key];

    if (isObject(value)) {
      // запускаем рекурсию, если объект вложенный
      current += stringifyObj(value);
      res.push(current);
      continue;
    }

    current += stringifyPrimitive(value);
    res.push(current);
  }

  return "{" + res.join(",") + "}";
};

const stringifyArray = (arr) => {
  const res = [];

  for (const item of arr) {
    // если вложенный массив, то используем stringifyArray
    if (Array.isArray(item)) {
      res.push(stringifyArray(item));
      continue;
    }

    // если примитив или объект, то используем stringify
    res.push(stringify(item));
  }

  return "[" + res.join(",") + "]";
};

// входная функция
const stringify = (data) => {
  // массив в JSON
  if (Array.isArray(data)) {
    return stringifyArray(data);
  }

  // объект в JSON
  if (isObject(data)) {
    return stringifyObj(data);
  }

  // примитивы в JSON
  return stringifyPrimitive(data);
};

console.log("====================JSON.stringify method:");
console.log(JSON.stringify(5));
console.log(JSON.stringify("hello"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(
  JSON.stringify({
    name: "zurab",
    nested: { age: 21 },
  })
);
console.log(JSON.stringify([{ id: 1 }]));
console.log(JSON.stringify([]));
console.log(JSON.stringify([[], [[{ id: 1 }]]]));

console.log("====================stringify  method:");
console.log(stringify(5));
console.log(stringify("hello"));
console.log(stringify(true));
console.log(stringify(null));
console.log(
  stringify({
    name: "zurab",
    nested: { age: 21 },
  })
);
console.log(stringify([{ id: 1 }]));
console.log(stringify([]));
console.log(stringify([[], [[{ id: 1 }]]]));
