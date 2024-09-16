import { useState } from 'react';
import CurrencyList from "./currencyList.jsx";
import './Overview.css';

export default function Overview({ currenBalance ,
    overview,income,expenses,onSelectListCurrency,
    currencyFomatted,onFormatted,showList,handleNavList
  }) {
  return (
    <div className="m-5">
      <span className="flex flex-row justify-between">
        <p className="text-3xl capitalize font-bold">
          {overview}
        </p>
        <span>
          <CurrencyList
            showLists={showList}
            onSelect = {onSelectListCurrency}
            onShowLists = {handleNavList}
            currentCurr = {currencyFomatted}
          />
        </span>
      </span>
      <div className="md:flex flex-row justify-around items-center mt-6">
        <span className="balance-palette bg-zinc-900">
          <p>Current Balance</p>
          <p className="amount-par">
            {onFormatted.format(currenBalance)}.00
          </p>
        </span>
        <span className="balance-palette bg-white text-black">
          <p className="text-gray-500">income</p>
          <p className="amount-par">
            {onFormatted.format(income)}.25
          </p>
        </span>
        <span className="balance-palette bg-white text-black">
          <p className="text-gray-500">expenses</p>
          <p className="amount-par">
            {onFormatted.format(expenses)}.00
          </p>
        </span>
      </div>
    </div>
  )
}