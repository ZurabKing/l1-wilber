const funcMathX = (() => {
  const createFiboncacci = () => {
    // кэш, для мемоизации значений фибоначчи
    const cache = {
      nums: {
        1: 0,
        2: 1,
      },
      max: 2,
    };

    // Функция для вычисления N-го числа в ряду Фибоначчи
    return (n) => {
      if (n <= 1) return 0;
      // берем данные из кэша, если они там есть
      if (cache.nums[n]) return cache.nums[n];

      const max = cache.max;

      let a = cache.nums[max - 1];
      let b = cache.nums[max];
      let temp;

      // начинаем с последнего значения из кэша,
      // чтобы не искать предыдущие вычисления
      for (let i = max; i < n; i++) {
        temp = a + b;
        a = b;
        b = temp;

        // кладем в кэш
        cache.nums[i + 1] = temp;
      }

      // устанавливаем новый максимум
      cache.max = n;

      return b;
    };
  };

  // Функция для вычисления всех чисел в ряду Фибоначчи до числа N
  const fibonacciSeries = (n) => {
    const fibonacci = createFiboncacci();

    return Array.from({ length: n }, (_, i) => fibonacci(i + 1));
  };


  const isPrime = (num) => {
    // Если число меньше 2, то оно не является простым
    if (num < 2) return false;

    // Проверяем делители от 2 до квадратного корня из числа
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // Если найден делитель, число не простое
      }
    }

    return true; // Если нет делителей, число простое
  };

  // Функция для вычисления N-го простого числа
  const nthPrime = (n) => {
    if (n <= 0) return undefined;

    let count = 0;
    let num = 2;

    while (count < n) {
      if (isPrime(num)) {
        count++;
        if (count === n) {
          return num; // Нашли N-е простое число
        }
      }
      num++;
    }

    return undefined; // Если N-е простое число не найдено
  };

  // Функция для вычисления всех простых чисел до числа N
  const primesUpToN = (n) => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };


  // Возвращаем методы
  return {
    createFiboncacci,
    fibonacciSeries,
    nthPrime,
    primesUpToN
  };
})();

console.log(funcMathX.createFiboncacci()(10)); 
console.log(funcMathX.fibonacciSeries(10)); 
console.log(funcMathX.nthPrime(8))
console.log(funcMathX.primesUpToN(6))
