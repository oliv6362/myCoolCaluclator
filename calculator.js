document.getElementsByTagName("h1")[0].style.fontSize = "2.5vw";

//variables for calcualtor operations
let currentValue = '0';
let currentOperator = '';
let result;
let num1 = null, num2 = null, history = null;
let x;
let commaAdded = false;

let equalsClicked = false;

document.getElementById('result').value = '0';



//A function that
function include(x) {

  
   if (equalsClicked) {
    num1 = null;
    equalsClicked = false;
    document.getElementById('history').value = '';
  }
  
  if (currentValue == '0'){
    currentValue = '';
  }
  
  currentValue += x;
  document.getElementById('result').value = currentValue;


}



function clearLast(){
  
let lastNum = currentValue;
lastNum = lastNum.slice(0, -1);
console.log(lastNum); 
  
currentValue = lastNum; 
 
 
  
document.getElementById('result').value = currentValue;
 
}


function operatorType(operator) { 
  conditionLogic();
  commaAdded = false;

  if (num1 !== null && currentValue === ''){
     currentOperator = operator;
     num2 = null;
  }
      document.getElementById('history').value = num1 + currentOperator;
}

function conditionLogic(){
    equalsClicked = false;
  
   if (currentValue !== ''){   
     if (num1 === null){
       num1 = parseFloat(currentValue);
   } 
     
      else
      if (num1 !== null && num2 === null){
        num2 = parseFloat(currentValue);
        calculate();
        num2 = null;
      } 
   
      else {
          num2 = null;
      }
      currentValue = '';
  }
}

function calculate() {  
      commaAdded = false;
      if (num2 === null) {  
        if (currentValue !== '') {
          num2 = parseFloat(currentValue);
        } 
        else {
          num2 = num1;
             }
      } 
       else
       if (num1 === null) {
           num1 = parseFloat(currentValue);
       }
  
    try {
      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;

          break;
        case '*':
          result = num1 * num2;
   
          break;
        case '±':
       
   
          break;
        case '%':
             result = num1 % num2;
          
          break;
        case '÷':
          if (num2 === 0) {
            throw new Error('Division by zero');
          }
          result = num1 / num2;
          break;
        default:
          throw new Error('Invalid operator');
      }
 
      document.getElementById('history').value = num1 + currentOperator + num2 + '=';
      currentValue = '';
      document.getElementById('result').value = result;
      num1 = result;
  
    } catch (error) {
      alert('Error: ' + error.message);
    }
}

function equals() {
  equalsClicked = true;
  calculate();
}

function comma(){
  if (commaAdded == false){
    currentValue += '.'
    commaAdded = true;
    document.getElementById('result').value = currentValue;
  }
}

//AC - removes all calculator variables and clears the display
function clearAll() {
  commaAdded = false;
  currentValue = '0';
  currentOperator = '';
  num1 = null;
  num2 = null;
  document.getElementById('result').value = '0';
  document.getElementById('history').value = currentValue + '';
}

