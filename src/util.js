
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

export function walletBalance({potsList , deafault}){
    const priceList = potsList.map((element) => Number(element.prices))
    const addUpPrice = priceList.reduce((a , b) => a + b , 0)
    return addUpPrice
}


export function balancePallete({savePots,deafault}){
   //console.log(savePots)
   
   const deafaultAmount = {
      currenBalance:deafault,
      income : 3814.25,
      expenses : 1405.00
    }
   return deafaultAmount
}
export const deafaultAmount = {
    currenBalance : 950000 ,
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

