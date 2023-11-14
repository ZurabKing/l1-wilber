const recursiveDOM = (node) => {
  // Выводим информацию о теге в консоль
  console.log("Tag Name:", node.tagName);

  // Рекурсивно обходим дочерние узлы
  for (const child of node.children) {
    recursiveDOM(child);
  }
};

const bodyElement = document.body;
recursiveDOM(bodyElement);
