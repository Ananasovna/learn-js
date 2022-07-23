const calculator = {
  input: document.querySelector('.calculator__input'),
  buttons: document.querySelectorAll('.calculator__button'),
  operation: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined,
  inputValue: '',

  buttonClickHandler(el) {
    if (el.innerText == 'C') {
      this.inputValue = ''
      this.input.value = this.inputValue;
    } else if (el.innerText == '+') {
      this.operation = plus;
      this.clearValue();
    } else if (el.innerText == '-') {
      this.operation = minus;
      this.clearValue();
    } else if (el.innerText == 'х') {
      this.operation = multiply;
      this.clearValue();
    } else if (el.innerText == '/') {
      this.operation = divide;
      this.clearValue();
    } else if (el.innerText == '=') {
      this.num2 = this.input.value;
      this.result = this.operation(this.num1, this.num2);
      this.input.value = this.inputValue = this.result; 
    } else {
      this.inputValue += el.innerText;
      this.input.value = calculator.inputValue;
    }
  },

  clearValue() {
    this.num1 = this.inputValue;
    this.input.value = this.inputValue = '';
  }
}

calculator.buttons.forEach(item => item.addEventListener('click', () => calculator.buttonClickHandler.call(calculator, item)));