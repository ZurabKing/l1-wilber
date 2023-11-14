const createElement = () => {
  //создали кнопку
  const newElem = document.createElement("button");

  newElem.style.width = "200px";
  newElem.style.height = "200px";
  newElem.style.backgroundColor = "blue";
  newElem.textContent = "Нажми на меня";

  //Добавляем элемент в DOM
  document.body.appendChild(newElem);
};

createElement();
