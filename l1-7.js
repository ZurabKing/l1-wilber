const functions = [() => 0, () => 1, () => 2, () => 3];

const callFunction = (fns) => {
  fns.forEach((fn) => console.log(fn()));
};

callFunction(functions);
