const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  if (checkButton.value === '') {

    const textInput = document.getElementById('text-input').value;

    if (textInput === '') {
      alert('Please input a value');
    } else {

      if (textInput.length === 1) {
        result.innerHTML = `<strong>${textInput}</strong> is a palindrome`;
        textContainer.classList.add("show-result");
      }

      isPalindrome(textInput);

    }
  }
});

const isPalindrome = (text) => {
  const regex = /[\W_]/g;
  const formattedText = text.toLowerCase().replace(regex, '');
  
  if (formattedText === formattedText.split('').reverse().join('')) {
    result.innerHTML = `<strong>${text}</strong> is a palindrome`;
    textContainer.classList.add("show-result");
  } else {
    result.innerHTML = `<strong>${text}</strong> is not a palindrome`;
    textContainer.classList.add("show-result");
  }
};