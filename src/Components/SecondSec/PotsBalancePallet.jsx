import React from 'react'
import { IoWallet } from "react-icons/io5";
import { walletBalance } from '../../util.js'
import './Pots.css'

export default function PotsBalancePallet({potsList,onFormatted,dispMessage,messageElement,deafault, content}) {
  
  const addUpPrice = walletBalance({potsList , deafault})
  
  return (
    <div className="m-5">
      <div >
        <div className="pots-bal">
          <span className="pot-wallet-title">
            <IoWallet/>
            <p>Total Saved</p>
          </span>
          <span className="wallet-balace">
            {onFormatted.format(addUpPrice)}.00
          </span>
          <span className="text-right">
            <p className="mt-14 text-gray-300 text-[1rem">
                Your personal savings wallet
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}