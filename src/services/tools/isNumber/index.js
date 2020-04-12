export default function isNumber(number) {
  const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  number = number.toString();

  for (let i = 0; i < number.length; i++)
    if (isNaN(number[i]) && digits.indexOf(number[i]) === -1) return false;

  return true;
}
