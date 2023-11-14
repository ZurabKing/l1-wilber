import moment from "moment";

// Экспортируем функцию для форматирования даты
export function formatDate(date, formatString) {
  return moment(date).format(formatString);
}

// Экспортируем функцию для получения текущей даты
export function getCurrentDate() {
  return moment();
}

// Экспортируем функцию для вычисления разницы между датами
export function getDateDiff(start, end, unit) {
  return moment(end).diff(moment(start), unit);
}
