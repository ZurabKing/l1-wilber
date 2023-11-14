const getLocalStorageSize = () => {
  try {
    //Проверка на доступность объектаа localStorage
    if (!localStorage) {
      throw new Error("Локальное хранилище не доступно");
    }
    localStorage.setItem("test", "0"); // Записываем тестовое значение

    let size = 0; //Используем для накопления размера данных

    //Перебираем все ключи объекта localStorage
    for (let key in localStorage) {
      //Проверка, что ключ принадлежит localStorage
      if (localStorage.hasOwnProperty(key)) {
        size += localStorage[key].length * 2; // Учитываем размер в байтах
      }
    }

    localStorage.removeItem("test"); // Удаляем тестовое значение

    return size;
  } catch (e) {
    console.error("Ошибка при определении размера localStorage:", e);
    return 0;
  }
};

const localStorageSizeMB = getLocalStorageSize();
console.log(
  `Максимальный объем данных в localStorage: ${localStorageSizeMB} байта`
);
