import {useState} from 'react'
import './Overview.css';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function Balance({currenBalance,income,expenses,onFormatted}) {
  const [hideBalance,setHideBalance] = useState(true)
  
  function hideBalanceEle(){
    setHideBalance((showBalance) => !showBalance)
  }
  let currentBalance;
  
  if (hideBalance){
    currentBalance =(
      <span>
        {onFormatted.format(currenBalance)}.00
      </span>
    )
  }else{
    currentBalance = (
      <span>
        ********
      </span>
    )
  }
  return (
    <div>
      <div className="md:flex flex-row justify-between items-center mt-6 gap-3">
        <span className="balance-palette bg-zinc-900">
          <span className = "check-bal">
            <p>Current Balance</p>
            {hideBalance === true ? (
              <FaEyeSlash onClick={hideBalanceEle}/>
            ):(
              <FaEye onClick={hideBalanceEle}/>
            )}
          </span>
          <p className="amount-par">
            {currentBalance}
          </p>
        </span>
        <span className="balance-palette bg-zinc-900 text-black">
          <p className="text-gray-100">income</p>
          <p className="amount-par text-white">
            {onFormatted.format(income)}.25
          </p>
        </span>
        <span className="balance-palette bg-green-800 text-black">
          <p className="text-gray-100">expenses</p>
          <p className="amount-par text-white">
            {onFormatted.format(expenses)}.00
          </p>
        </span>
      </div>
      
    </div>
  )
}