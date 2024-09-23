import React from 'react'
import './Pots.css';

export default function PotsInputs({potsInput , setInputField , emptyInput ,loadingData}) {
  return (
    <div >
      <form  className="text-input ">
        <input 
          type="text"
          value={potsInput.names}
          placeholder="items name..."
          required
          onChange={
            (e) => setInputField("names" , e.target.value)
          }
        />
        <input 
          type="number"
          name="prices"
          placeholder="amount..."
          value={potsInput.prices}
          required
          onChange={
            (e) => setInputField("prices" , e.target.value)
          }
        />
      </form>
      <div>
        <button
          className={`bg-green-800 w-full p-2 rounded ${emptyInput && "opacity-45"}`}
          type="submit"
          disabled={emptyInput}
          onClick={loadingData}
        >
          save
        </button>
      </div>
    </div>
  )
}