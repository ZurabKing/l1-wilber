const outerFn = (cbs) => () => cbs.map((cb) => cb());

const innerFn = outerFn([() => 1, () => 2, () => "hello"]);
console.log(innerFn());



