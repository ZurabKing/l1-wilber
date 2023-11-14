const createAndAddElement = () => {
  const template = document.getElementById("myTemplate");

  // Клонируем содержимое шаблона
  const templateContent = document.importNode(template.content, true);

  // Создаем новый элемент и добавляем в него склонированный контент
  const newElement = document.createElement("div");
  newElement.appendChild(templateContent);

  // Добавляем новый элемент в DOM
  const container = document.getElementById("container");
  container.appendChild(newElement);
};

// Вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", createAndAddElement);
