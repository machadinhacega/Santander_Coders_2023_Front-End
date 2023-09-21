let btnSum = document.querySelector('#sumButton')


btnSum.addEventListener("click", () => {
  let result = parseFloat(document.getElementById('numFirst').value) + parseFloat(document.getElementById('numSecond').value)
  document.getElementById("show").value = result
})

subButton.addEventListener("click", () => {
  let result = parseFloat(document.getElementById('numFirst').value) - parseFloat(document.getElementById('numSecond').value)
  document.getElementById("show").value = result
})

multButton.addEventListener("click", () => {
  let result = parseFloat(document.getElementById('numFirst').value) * parseFloat(document.getElementById('numSecond').value)
  document.getElementById("show").value = result
})

divButton.addEventListener("click", () => {
  let result = parseFloat(document.getElementById('numFirst').value) / parseFloat(document.getElementById('numSecond').value)
  document.getElementById("show").value = result
})




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
//  id="history" 

document.getElementById('currentValue').value = 0
document.getElementById('numA').value = 2