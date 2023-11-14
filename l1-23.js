const assessPasswordStrength = (password) => {
  // Оценка по длине пароля
  const lengthScore = password.length >= 8 ? 2 : 0; // Если длина пароля больше или равна 8, присваиваем 2, иначе 0.

  // Оценка по использованию различных символов
  const hasUppercase = /[A-Z]/.test(password); // Проверяем, содержит ли пароль заглавные буквы.
  const hasLowercase = /[a-z]/.test(password); // Проверяем, содержит ли пароль строчные буквы.
  const hasNumbers = /\d/.test(password); // Проверяем, содержит ли пароль цифры.
  const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password); // Проверяем, содержит ли пароль специальные символы.

  // Общая оценка
  const complexityScore =
    (hasUppercase ? 1 : 0) + // Если есть заглавные буквы, прибавляем 1, иначе 0.
    (hasLowercase ? 1 : 0) + // Если есть строчные буквы, прибавляем 1, иначе 0.
    (hasNumbers ? 1 : 0) + // Если есть цифры, прибавляем 1, иначе 0.
    (hasSpecialChars ? 1 : 0); // Если есть специальные символы, прибавляем 1, иначе 0.

  const totalScore = lengthScore + complexityScore; // Общая оценка равна сумме оценок за длину и сложность.

  // Оценка сложности
  if (totalScore < 2) {
    return "Слишком слабый пароль."; // Если общая оценка меньше 2, пароль слишком слабый.
  } else if (totalScore < 4) {
    return "Слабый пароль. Увеличьте длину пароля."; // Если общая оценка меньше 4, пароль слабый. Рекомендация увеличить длину.
  } else if (totalScore < 6) {
    return "Средний пароль. Добавьте больше разнообразных символов."; // Если общая оценка меньше 6, пароль средний. Рекомендация добавить разнообразные символы.
  } else {
    return "Надежный пароль!"; // Если общая оценка 6 и выше, пароль надежный.
  }
};

const userPassword = "Zurab2002@";
const passwordStrength = assessPasswordStrength(userPassword);
console.log(passwordStrength);
