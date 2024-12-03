document.getElementById('check-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const text = inputElement.value;
  
    if (!text.trim()) {
      alert('Please input a value');
      return;
    }
  
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');
  
    if (cleanedText === reversedText) {
      resultElement.textContent = `${text} is a palindrome`;
     resultElement.className = 'palindrome';
    } else {
      resultElement.textContent = `${text} is not a palindrome`;
      resultElement.className = 'not-palindrome';
    }
  
  });
  