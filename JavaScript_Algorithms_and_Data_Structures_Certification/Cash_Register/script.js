let price = 19.5;
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
    return
  } else if (parseFloat(cash.value) === price) { 
    change.innerText = 'No change due - customer paid with exact cash'
    return
  }

  const changeTotal = parseFloat(cash.value) - price
  console.log(changeTotal)
  checkFund(changeTotal)

})

const checkFund = (changeCoin) => {
  let cashInDrawer = 0
  cid.forEach((coin) => {
    cashInDrawer += coin[1]
  })
  cashInDrawer = parseFloat(cashInDrawer.toFixed(2))
  if (cashInDrawer < changeCoin) {
    change.innerText = 'Status: INSUFFICIENT_FUNDS'
    return
  } else if (cashInDrawer === changeCoin) {
    change.innerText = 'Status: CLOSED'
    return
  }
}

const getChange = (changeCoin) => {
  let changeTotal = changeCoin
  switch (true) {
    case changeTotal >= 100:
    case changeTotal >= 20:
    case changeTotal >= 10:
    case changeTotal >= 5:
    case changeTotal >= 1:
    case changeTotal >= 0.25:
    case changeTotal >= 0.1:
    case changeTotal >= 0.05:
    case changeTotal >= 0.01:
    case changeTotal === 0:
    default:
  }
} 