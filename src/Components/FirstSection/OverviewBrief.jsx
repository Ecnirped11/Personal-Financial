import React from 'react'
import '../SecondSec/Pots.css';
import './Overview.css'
import { IoWallet } from "react-icons/io5";
import { walletBalance } from '../../util.js'

export default function OverviewBrief({onFormatted,potsList,deafault}) {
  
  const addUpPrice = walletBalance({potsList , deafault})
  return (
    <div className="mt-10 mb-[10rem]">
      <p className="label">Savings wallet</p>
      <div className="sl-bg mt-4">
        <div className="pots-bal shadow-md shadow-zinc-950 md:w-full mb-2">
          <span className="pot-wallet-title">
            <IoWallet/>
            <p className="capitalize">
              total saved
            </p>
          </span>
          <span className="wallet-balace">
            {onFormatted.format(addUpPrice)}.00
          </span>
          <span className="text-right">
            <p className="mt-8 text-gray-300 text-[0.9rem">
                Your personal savings wallet
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}
