const isPalindrome = (str) => {
  // Убираем все лишние символы и приводим к общему регистру
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Проверка является ли строка палиндромом
  return str === [...str].reverse().join("");
};

const inputString = "аргентина манит негра";
if (isPalindrome(inputString)) {
  console.log("Строка является палиндромом");
} else {
  console.log("Строка не является палиндромом");
}
