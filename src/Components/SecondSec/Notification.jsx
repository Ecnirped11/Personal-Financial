import React from 'react'
import './Pots.css'
export default function Notifications({dispMessage,onFormatted,potsList,deafault,content}) {
  
  const priceList = potsList.map((element) => Number(element.prices))
  const amount = onFormatted.format(priceList.at(0))
  
  let message;
  if (!content){
    message = (
     <span>
       Can't deduct {amount} try to fund your wallet.
     </span>
    )
  }else{
    message = (
      <span>
        {amount} just deducted from your current balance
      </span>
    )
  }
  return (
    <div className="flex justify-center">
      {dispMessage && (
        <div className="flex justify-center fixed z-50 w-full">
          <div className="paragraph">
            <p className="uppercase font-medium text-green-500 mb-4">
              Notification
            </p>
            <p className="text-[0.8rem]">
              {message}
            </p>
          </div>  
        </div>
      )}
    </div>
  )
}
