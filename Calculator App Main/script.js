class Calculator 
{
    constructor(calcElement,resultElement)
    {
        this.calcElement = calcElement;
        this.resultElement = resultElement;
        this.clear();
    }
    clear()
    {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(number)
    {
        //if(this.currentOperand === '.' || this.currentOperand.toString().includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    updateDisplay()
    {
      this.calcElement.innerText = this.currentOperand;
      if(this.operation !== undefined)
      {
        this.resultElement.innerText = `${this.previousOperand} ${this.operation}`;
      }
    }
    chooseOperation(operation)
   { 
     console.log("previous : " + this.previousOperand);
     console.log("current : " + this.currentOperand);
     if(operation === '') return;
     if(this.previousOperand !== '') this.compute();
     this.operation = operation;
     console.log("opeartion :" + this.operation);
     this.previousOperand = this.currentOperand;
     this.currentOperand = '';
   }
   compute()
   {
     let computation;
     console.log("in computation");
     let prev = parseFloat(this.previousOperand);
     let curr = parseFloat(this.currentOperand);
     if(isNaN(prev) || isNaN(curr)) return;
     switch(this.operation)
       {
         case '+': computation = prev + curr; break;
         case '-': computation = prev - curr; break;
         case 'x': computation = prev * curr; break;
         case '/': computation = prev / curr; break;
         default: return;
       }
     this.currentOperand = computation;
     this.previousOperand = '';
     this.operation = undefined;
     console.log(computation);
   }
  reset()
  {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.resultElement.innerText = '';
  }
  delete()
  {
    this.currentOperand = this.currentOperand.toString().slice(0,-1);
  }
  changeTheme(value)
  {
    links[2].setAttribute("href",`theme${value}.css`);
  }
}


const calcElement = document.querySelector('[data-calc]');
const resultElement = document.querySelector('[data-result]');
const operationElement = document.querySelectorAll('[data-operation]'); // Reset X / + - 
const numberElement = document.querySelectorAll('[data-number]'); // 0-9
const toggleBtn = document.querySelectorAll('input');
const links = document.querySelectorAll("link");

const calculator = new Calculator(calcElement,resultElement);


numberElement.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('event Listened');
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationElement.forEach((button) => {
  if(button.dataset.operation === 'addition' || button.dataset.operation === 'subtraction' || button.dataset.operation === 'multiplication' || button.dataset.operation === 'division')
   {
     button.addEventListener('click', () => { 
     calculator.chooseOperation(button.innerText);
     calculator.updateDisplay();
    });
   }
  if(button.dataset.operation === 'reset')
  {
    button.addEventListener('click',() => {
      calculator.reset();
      calculator.updateDisplay();
    });
    console.log("reset called");
  }
  if(button.dataset.operation === 'equals')
  {
    button.addEventListener('click', () => {
      calculator.compute();
      calculator.resultElement.innerText = '';
      calculator.updateDisplay();
    });
  }
  if(button.dataset.operation === 'delete')
  {
    button.addEventListener('click',()=> {
      calculator.delete();
      calculator.updateDisplay();
    });
  }
});

toggleBtn.forEach(button => {
  button.addEventListener('click',()=>{
    calculator.changeTheme(button.value);
  });
});