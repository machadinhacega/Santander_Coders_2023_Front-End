// Botão
equalButton.addEventListener("click", () => {
  const firstNum = Math.max(Number(numFirst.value), 0);
  const secNum = Math.max(Number(numSecond.value), 0);

  const op = operation.value;

  if(secNum === 0 && op == "/"){
    console.error("Não é possível realziar divisões por zero")
    return;
  }

  switch(op){
    case "+":
      show.value = firstNum + secNum;
      break;
    case "-":
      show.value = firstNum - secNum;
      break;
    case "*":
      show.value = firstNum * secNum;
      break;
    case "/":
      show.value = firstNum / secNum;
      break;
    default:
      console.log('operação nao identificada');    
  }

  if(show.value > 20){
    // show.classList.remove('bg-Orange') 
    // show.classList.add('bg-Green') 
    show.className = "bg-Green"
  } else{
    // show.classList.add('bg-Orange') 
    // show.classList.remove('bg-Green') 
    show.className = "bg-Orange"
  }

})
// Outra forma (não recomendada):
// eval(`${firstNum}${op}${secNum}`)





// Input
const numElemsInput = document.querySelectorAll(".numsInput");

for (let elem of numElemsInput){
  elem.addEventListener("input", () => {
    const firstNumInput = Math.max(Number(numElemsInput[0].value), 0);
    const secNumInput = Math.max(Number(numElemsInput[1].value), 0);
    const opInput = operationInput.value;

    if(secNumInput === 0 && opInput == "/"){
      console.error("Não é possível realziar divisões por zero")
      return;
    }

    switch(opInput){
      case "+":
        showInput.value = firstNumInput + secNumInput;
        break;
      case "-":
        showInput.value = firstNumInput - secNumInput;
        break;
      case "*":
        showInput.value = firstNumInput * secNumInput;
        break;
      case "/":
        showInput.value = firstNumInput / secNumInput;
        break;
      default:
        console.log('operação não identificada');
    }
  })
}





// BMO
document.getElementById('history').innerText = ' '
currentValue.innerText = '0'


 
let opActive;
let numA = 0
let numB = 0
// let finish = false

const digits = document.querySelectorAll(".digit");
for (let digit of digits){
  digit.addEventListener("click", () => {
    if(currentValue.innerText == '0' || opActive != undefined)  {
      currentValue.innerText = digit.value;

    } else {
      currentValue.innerText += digit.value;
    }
  })
}   

btnDot.addEventListener("click", () => {
  currentValue.innerText += '.'
})

btnBackspace.addEventListener("click", () => {
  if(currentValue.innerText.length == 1){
    currentValue.innerText = '0'
  }
  if(currentValue.innerText != '0'){
    currentValue.innerText = currentValue.innerText.substring(0,currentValue.innerText.length-1)
  } 
}) 


const operations = document.querySelectorAll('.btnOperations')
for(let op of operations){
  op.addEventListener("click", () => {
    document.getElementById('history').innerText = currentValue.innerText + op.value
    numA = Number(currentValue.innerText);
    opActive = op.value;
  })
}


btnResult.addEventListener("click", () => {
  numB = Number(currentValue.innerText)
  document.getElementById('history').innerText += currentValue.innerText + ' ='
  
  switch (opActive) {
    case '+':
      currentValue.innerText = numA + numB
      // finish = true
      break;
    case '-':
      currentValue.innerText = numA - numB
      // finish = true
      break;
    case '*':
      currentValue.innerText = numA * numB
      // finish = true
      break;
    case '÷':
      currentValue.innerText = numA / numB
      // finish = true
      break;
  
    default:
      break;
  }
  opActive = undefined
})


btnCE.addEventListener("click", () => {
  document.getElementById('history').innerText = ' '
  currentValue.innerText = '0'
  opActive = undefined
})
// const numElems = document.querySelectorAll(".nums");

// for (let elem of numElems){
//   elem.addEventListener("input", () => {







// if(parseFloat(document.getElementById('numFirst').value) < 0){
//   document.getElementById('numFirst').value = 0
// }



let digito = document.getElementById('btn0').value
console.log(digito);
// document.getElementById('currentValue').innerText = 0



// 

// BEEMO
// btn0
// btnPercent
// btnDiv
// btnMult
// btnSub
// btnSum
// btnResult
// btnDot
// btnBackspace


// id="currentValue"
//  id="" 

// document.getElementById('history').innerText = 0
// document.getElementById('currentValue').value = 0
// document.getElementById('numA').value = 2