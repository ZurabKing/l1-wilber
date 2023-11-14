import { formatDate, getCurrentDate, getDateDiff } from "./utils";

const today = getCurrentDate();
const formattedDate = formatDate(today, "YYYY-MM-DD");
console.log("Текущая дата:", formattedDate);

const startDate = moment("2023-01-01");
const endDate = moment("2023-12-31");
const daysUntilEndOfYear = getDateDiff(today, endDate, "days");
console.log("Дней до конца года:", daysUntilEndOfYear);
