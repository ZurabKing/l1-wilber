const simpleAsyncFunction = async () => {
  const result1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data1 = await result1.json();

  const result2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data2 = await result2.json();

  return [data1, data2];
};

simpleAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
