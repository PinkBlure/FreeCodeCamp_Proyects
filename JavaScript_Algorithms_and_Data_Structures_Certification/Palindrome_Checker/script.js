const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  if (checkButton.value === '') {

    const textInput = document.getElementById('text-input').value;

    if (textInput === '') {
      alert('Please input a value');
    } else {

      if (textInput.length === 1) {
        result.innerText = `${textInput} is a palindrome`;
      }

      isPalindrome(textInput);

    }
  }
});

const isPalindrome = (text) => {
  const regex = /[\W_]/g;
  const formattedText = text.toLowerCase().replace(regex, '');
  
  if (formattedText === formattedText.split('').reverse().join('')) {
    result.innerText = `${text} is a palindrome`;
  } else {
    result.innerText = `${text} is not a palindrome`;
  }
};