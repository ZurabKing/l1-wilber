import "./styles.css";

const DocumentWriteMax = () => {
  //Создаем счетчик для подсчета вызывов
  let count = 0;

  // Рекурсивно вызываем функцию
  const recursiveWrite = () => {
    try {
      document.write(`Вызов №: ${count}<br>`); // Внутрь передаем счетчик, который считает вызовы;
      count++; // После вызова увеличиваем count;
      recursiveWrite(); // Вызываем функцию по новому чтоб рекурсивно пройтись еще раз;
    } catch (error) {
      console.log(`максимально количество вызовов: ${count}`); // кол. успешных вызовов, до возникновения ошибки;
    }
  };

  recursiveWrite();
};

DocumentWriteMax();
