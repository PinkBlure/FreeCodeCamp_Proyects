const convertBtn = document.getElementById('convert-btn');
const numberEl = document.getElementById('number');
const outputEl = document.getElementById('output');

convertBtn.addEventListener('click', () => {

  const num = parseInt(numberEl.value);

  if (numberEl.value === '' || isNaN(numberEl.value)) {
    outputEl.innerText = 'Please enter a valid number.';
    outputEl.classList.add('error');
    outputEl.classList.remove('hidden');
    outputEl.classList.remove('long');
  } else if (num <= 0) {
    outputEl.innerText = 'Please enter a number greater than or equal to 1.';
    outputEl.classList.add('error');
    outputEl.classList.add('long');
    outputEl.classList.remove('hidden');
  } else if (num >= 4000) {
    outputEl.innerText = 'Please enter a number less than or equal to 3999.';
    outputEl.classList.add('error');
    outputEl.classList.add('long');
    outputEl.classList.remove('hidden');
  } else {
    numberToRoman(num);
  }
});

const numberToRoman = (number) => {

  let roman = '';

  while (number > 0) {
    switch(true) {
      case number >= 1000:
        number -= 1000;
        roman += 'M';
        break;
      case number >= 900:
        number -= 900;
        roman += 'CM';
        break;
      case number >= 500:
        number -= 500;
        roman += 'D';
        break;
      case number >= 400:
        number -= 400;
        roman += 'CD';
        break;
      case number >= 100:
        number -= 100;
        roman += 'C';
        break;
      case number >= 90:
        number -= 90;
        roman += 'XC';
        break;
      case number >= 50:
        number -= 50;
        roman += 'L';
        break;
      case number >= 40:
        number -= 40;
        roman += 'XL';
        break;
      case number >= 10:
        number -= 10;
        roman += 'X';
        break;
      case (number >= 9):
        number -= 9;
        roman += 'IX';
        break;
      case number >= 5:
        number -= 5;
        roman += 'V';
        break;
      case number >= 4:
        number -= 4;
        roman += 'IV';
        break;
      default:
        number -= 1;
        roman += 'I';
        break;
    }
  }

  outputEl.innerText = roman;

  outputEl.classList.remove('error');
  outputEl.classList.remove('long');
  outputEl.classList.remove('hidden');

}