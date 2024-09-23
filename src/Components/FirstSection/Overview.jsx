import { useState } from 'react';
import CurrencyList from "./currencyList.jsx";
import Balance from './Balance.jsx'
import OverviewBrief from './OverviewBrief.jsx'
import './Overview.css';

export default function Overview({ onSelectListCurrency,currenBalance,income,expenses,
    currencyFomatted,onFormatted,showList,handleNavList,displayBalance,overview,potsList,deafault
  }) {
  
  return (
    <div className="mb-10 m-5">
      <span className="flex flex-row justify-between">
        <p className="text-3xl capitalize font-bold text-gray-200">
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
      <span>
        <Balance
          currenBalance={currenBalance}
          income={income}
          expenses={expenses}
          onFormatted={onFormatted}
        />
        <OverviewBrief
          onFormatted={onFormatted}
          potsList={potsList}
          deafault={deafault}
        />
      </span>
    </div>
  )
}