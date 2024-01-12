let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById('cash')
const purchase = document.getElementById('purchase-btn')
const change = document.getElementById('change-due')
const priceText = document.getElementById('price')

priceText.innerText = `Total: $${price}`

purchase.addEventListener('click', ()=>{
  console.log(cash.value, price)
  if (cash.value < price) {
    alert('Customer does not have enough money to purchase the item')
  } else if (parseFloat(cash.value) === price) { 
    change.innerText = 'No change due - customer paid with exact cash'
  }
})