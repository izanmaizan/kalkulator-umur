const $ = (element) => {
    return document.querySelector(element);
  }
  
  const $All = (element) => {
    return document.querySelectorAll(element);
  }
  
  const calculatorForm = $('#calculator-form')
  const dayInput = $('#day-input')
  const monthInput = $('#month-input')
  const yearInput = $('#year-input')
  const ageDaysSpan = $('#days-age')
  const ageMonthsSpan = $('#months-age')
  const ageYearsSpan = $('#years-age')
  const errorSpan = $All('.calculator-input__error')
  const dateSpan = $All('.calculator-input__date');