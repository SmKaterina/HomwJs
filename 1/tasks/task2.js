  let calculator = {
    num1: 0,
    num2: 0,
  read() {
  this.num1 = prompt('num1?');
  this.num2 = prompt('num2?');
  },

  sum() {
  return parseFloat(this.num1) + parseFloat(this.num2);
  },

  mul() {
  return this.num1 * this.num2;
  }
  }
  calculator.read();

  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );