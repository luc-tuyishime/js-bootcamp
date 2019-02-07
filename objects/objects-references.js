let myAccount = {
  name: 'jean luc',
  expenses: 0,
  income: 0
}

let otherAccount = myAccount
otherAccount.income = 1500

// account parameter is a reference of the (myAccount) object
let addExpenses = (account, amount) => {
  account.expenses = account.expenses + amount
}

// add Income
let addIncome = (account, income) => {
  account.income = account.income + income
}

// reset Account
let resetAccount = (account) => {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = (account) => {
 let balance = account.income - account.expenses
 return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 2.50)
addIncome(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
