const forms = {
  singular: "пользователь",
  plural1: "пользователя",
  plural2: "пользователей",
};

const pluralize = (number) => {
  if (number === 1) {
    return `1 ${forms.singular}`;
  }
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${number} ${forms.singular}`;
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return `${number} ${forms.plural1}`;
  } else {
    return `${number} ${forms.plural2}`;
  }
};
//Экспорт для модуля
export { pluralize };

console.log(pluralize(1024)); // 112 сообщений
console.log(pluralize(12)); // 12 сообщений
console.log(pluralize(1)); // 1 сообщение
