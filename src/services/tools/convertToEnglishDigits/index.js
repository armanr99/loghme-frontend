export default function convertToPersianDigits(number) {
  const digits = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  number = number.toString();

  let result = "";
  for (let i = 0; i < number.length; i++)
    result += number[i] in digits ? digits[number[i]] : number[i];

  return result;
}
