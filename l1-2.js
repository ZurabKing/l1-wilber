const isStrangeNumber = (num) => {
  if (num <= 1) {
    return false;
  }

  let sumOfDivisors = 1; // Изначально устанавливаем сумму делителей в 1.

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sumOfDivisors += i;
      if (i !== num / i) {
        // Добавляем делитель num/i, если он отличается от i.
        sumOfDivisors += num / i;
      }
    }
  }

  return num === sumOfDivisors;
};

console.log(isStrangeNumber(6)); // true
console.log(isStrangeNumber(12)); // false
console.log(isStrangeNumber(28)); // true
