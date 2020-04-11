export default function convertToPersianDigits(number) {
  const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  number = number.toString();
  
  let result = "";
  for(let i = 0; i < number.length; i++)
    result += digits[number[i]];

  return result;
}