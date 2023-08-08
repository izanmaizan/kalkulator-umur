// date object
const date = new Date()
const calculatorInput = [dayInput, monthInput, yearInput]

calculatorForm.addEventListener("submit", (e) => {
  e.preventDefault()

  if (validateInputValue()) return

  getYear()
  getMonth()
  getDay()
})

// validar si los inputs están vacíos o la fecha es erronea
const validateInputValue = () => {
  let errorInputDay, errorInputMonth, errorInputYear

  if (calculatorInput[0].value === "") {
    errorSpan[0].textContent = errorInputDate["errorEmptyDate"]
    errorSpan[0].classList.add("active");
    calculatorInput[0].classList.add('input-error')
    dateSpan[0].classList.add('calculator-input__errorDate')
    errorInputDay = true
  } else if (calculatorInput[0].value < 1 || calculatorInput[0].value > 31) {
    errorSpan[0].textContent = errorInputDate["errorInvalidDate"]
    errorSpan[0].classList.add("active");
    calculatorInput[0].classList.add('input-error')
    dateSpan[0].classList.add('calculator-input__errorDate')
    errorInputDay = true
  } else {
    errorSpan[0].classList.remove("active");
    calculatorInput[0].classList.remove('input-error')
    dateSpan[0].classList.remove('calculator-input__errorDate')
    errorInputDay = false
  }

  if (calculatorInput[1].value === "") {
    errorSpan[1].textContent = errorInputDate["errorEmptyDate"]
    errorSpan[1].classList.add("active");
    calculatorInput[1].classList.add('input-error')
    dateSpan[1].classList.add('calculator-input__errorDate')
    errorInputMonth = true
  } else if (calculatorInput[1].value < 1 || calculatorInput[1].value > 12) {
    errorSpan[1].textContent = errorInputDate["errorInvalidDate"]
    errorSpan[1].classList.add("active");
    calculatorInput[1].classList.add('input-error')
    dateSpan[1].classList.add('calculator-input__errorDate')
    errorInputMonth = true
  } else {
    errorSpan[1].classList.remove("active");
    calculatorInput[1].classList.remove('input-error')
    dateSpan[1].classList.remove('calculator-input__errorDate')
    errorInputMonth = false
  }

  if (calculatorInput[2].value === "") {
    errorSpan[2].textContent = errorInputDate["errorEmptyDate"]
    errorSpan[2].classList.add("active");
    calculatorInput[2].classList.add('input-error')
    dateSpan[2].classList.add('calculator-input__errorDate')
    errorInputYear = true
  } else if (calculatorInput[2].value < 1 || calculatorInput[2].value > date.getFullYear()) {
    errorSpan[2].textContent = errorInputDate["errorInvalidDate"]
    errorSpan[2].classList.add("active");
    calculatorInput[2].classList.add('input-error')
    dateSpan[2].classList.add('calculator-input__errorDate')
    errorInputYear = true
  } else {
    errorSpan[2].classList.remove("active");
    calculatorInput[2].classList.remove('input-error')
    dateSpan[2].classList.remove('calculator-input__errorDate')
    errorInputYear = false
  }

  if (errorInputDay || errorInputMonth || errorInputYear) return true
}

const getYear = () => {
  let yearResult = date.getFullYear() - yearInput.value
  let monthResult = (date.getMonth() + 1) - monthInput.value

  if (monthResult < 0) {
    --yearResult
  }
  ageYearsSpan.textContent = yearResult
}

const getMonth = () => {
  let monthResult = (date.getMonth() + 1)
  let dayResult = date.getDate() - dayInput.value


  if (dayResult < 0) {
    monthResult--
  }

  ageMonthsSpan.textContent = monthResult
}

const getDay = () => {
  let dayResult = date.getDate() - dayInput.value
  console.log(dayResult);
  let lengthMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  if (dayResult < 0) {
    date.getMonth()
    let newDayResult = lengthMonth + dayResult;
    console.log(newDayResult);
    ageDaysSpan.textContent = newDayResult
  } else {
    ageDaysSpan.textContent = dayResult
  }
}