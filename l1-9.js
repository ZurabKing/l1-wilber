const isObject = value => {
  return typeof value === "object" && value !== null;
}

const stringifyPrimitive = value => {
  if (typeof value === "string") {
    return `"${value}"`;
  }

  return `${value}`;
}

const stringifyObj = obj => {
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
}

console.log(
  stringifyObj({
    name: "Zurab",
    age: 21,
    nested: { ageSr: 20 },
  })
);
