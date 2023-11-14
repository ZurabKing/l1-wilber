const perimeterFunc = () => {
  let perimeter = 123321;

  const insideFunc = () => {
    console.log(perimeter);
  };

  return insideFunc;
};
const closure = perimeterFunc();
closure(); 
