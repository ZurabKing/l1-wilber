// Функция для вычисления объема памяти, занимаемого данными в localStorage
const calculateLocalStorageSize = () => {
  let totalSize = 0;

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += (key.length + localStorage[key].length) * 2; // умножаем на 2, так как один символ Unicode занимает 2 байта
    }
  }

  return totalSize;
};

// Функция для вывода информации о памяти в консоль
const logLocalStorageUsage = () => {
  const currentSize = calculateLocalStorageSize();
  const maxSize = 5 * 1024 * 1024; // Максимальный размер localStorage (5 MB)

  console.log(
    `Занято памяти в localStorage: ${currentSize} байт / ${maxSize} байт`
  );
};

// Вешаем обработчик события на изменение данных в localStorage
window.addEventListener("storage", logLocalStorageUsage);

// Используйте эту функцию для сохранения данных в localStorage
const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
  logLocalStorageUsage(); // Вызываем функцию для обновления информации о памяти
};

saveDataToLocalStorage("name", "John");
saveDataToLocalStorage("age", "30");
