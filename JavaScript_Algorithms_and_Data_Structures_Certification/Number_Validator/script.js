const check = document.getElementById('check-btn')
const input = document.getElementById('user-input')
const clear = document.getElementById('clear-btn')
const result = document.getElementById('results-div')

const case1 = /(^)1(\s)([0-9])+(-)([0-9])+(-)([0-9])+/g
const case2 = /(^)1(\s)(\()([0-9])+(\))(\s)([0-9])+(-)([0-9])+/g
const case3 = /(^)([0-9]){10}($)/g
const case4 = /(^)([0-9]){3}(-)([0-9]){3}(-)([0-9]){4}/g
const case5 = /(^)(\()([0-9]){3}(\))([0-9]){3}(-)([0-9]){4}/g
const case6 = /(^)(1)(\()([0-9]){3}(\))([0-9]){3}(-)([0-9]){4}/g
const case7 = /(^)(1)(\s)([0-9]){3}(\s)([0-9]){3}(\s)([0-9]){4}/g
const case8 = /(^)(1)(\s)([0-9]){3}(\s)([0-9]){3}(\s)([0-9]){4}/g

const validNum = [case1, case2, case3, case4, case5, case6, case7, case8]

const isValid = num => validNum.some((regex) => regex.test(num))

check.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please provide a phone number.')
  }
  if (isValid(input.value)) {
    result.innerText = `Valid US number: ${input.value}`
  } else {
    result.innerText = `Invalid US number: ${input.value}`
  }
})

clear.addEventListener('click', () => {
  result.innerText = ''
})


