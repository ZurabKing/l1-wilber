const arrayOfObjects = () => {
    people.sort((a, b) => {
      if (a.age === b.age) {
        return a.name.localeCompare(b.name);
      }
      // Сортировка по возрасту в порядке возрастания
      return a.age - b.age;
    });
  };
  
  console.log([
    { name: 'Sergey', age: 21 },
    { name: 'Zurab', age: 21 },
    { name: 'Arbi', age: 25 },
    { name: 'Adam', age: 30 },
  ]);
  