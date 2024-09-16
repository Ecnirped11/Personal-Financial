
export function handleOptions({currList}) {
  
  const formatter = new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : currList,
    minimumFractionDigits : 0,
    maximumFractionDigits : 0
  })
  const toObject = {
    formatted : formatter,
  }
  return toObject
}
export const deafaulAmount = {
    currenBalance : 4563.00,
    income : 3814.25,
    expenses : 1405.00
}
export let savingsList = []
    
export const sectionTitle = {
    overview : "overview",
    transaction : "transaction",
    budget : "budgets",
    Recurring : "ecurring bills"
}
