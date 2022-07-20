const calculator = {
  input: document.querySelector('.calculator__input'),
  buttons: document.querySelectorAll('.calculator__button'),
  operation: undefined,
  num1: undefined,
  num2: undefined,
  inputValue: undefined,

  buttonClickHandler() {
    console.log(calculator.input.value);
    if (this.innerText == 'C') {
      calculator.inputValue = ''
      calculator.input.value = calculator.inputValue;
    } else if (this.innerText == '+') {
      calculator.input.value = plus(num1, num2);
    } else if (this.innerText == '-') {
      calculator.input.value = minus(num1, num2);
    } else if (this.innerText == 'х') {
      calculator.input.value = multiply(num1, num2);
    } else if (this.innerText == '/') {
      calculator.input.value = divide(num1, num2);
    } else {
      calculator.input.value = this.innerText;
    }
  },
}

calculator.buttons.forEach(item => item.addEventListener('click', () => calculator.buttonClickHandler.call(item)));