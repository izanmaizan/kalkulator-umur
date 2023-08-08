const $ = (element) => {
    return document.querySelector(element);
  }
  
  const $All = (element) => {
    return document.querySelectorAll(element);
  }
  
  const calculatorForm = $('#calc-form')
  const dayInput = $('#day-input')
  const monthInput = $('#month-input')
  const yearInput = $('#year-input')
  const ageDaysSpan = $('#days-age')
  const ageMonthsSpan = $('#months-age')
  const ageYearsSpan = $('#years-age')
  const errorSpan = $All('.calcInput-error')
  const dateSpan = $All('.calcInput-date');